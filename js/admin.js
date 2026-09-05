// ==========================================
// GUIDO ADMIN DASHBOARD CONTROLLER
// ==========================================

let currentApplications = [];
let activeStatusFilter = 'all';
let currentSearchTerm = '';
let currentLocationFilter = 'all';
let selectedApplication = null;

// DOM Elements
const applicationsTableBody = document.getElementById('applicationsTableBody');
const tableLoading = document.getElementById('tableLoading');
const tableEmpty = document.getElementById('tableEmpty');
const applicationsTable = document.getElementById('applicationsTable');

const totalCountEl = document.getElementById('totalCount');
const pendingCountEl = document.getElementById('pendingCount');
const approvedCountEl = document.getElementById('approvedCount');
const rejectedCountEl = document.getElementById('rejectedCount');

const tabCountAll = document.getElementById('tabCountAll');
const tabCountPending = document.getElementById('tabCountPending');
const tabCountApproved = document.getElementById('tabCountApproved');
const tabCountRejected = document.getElementById('tabCountRejected');

const filterTabs = document.querySelectorAll('.filter-tab');
const adminSearchInput = document.getElementById('adminSearchInput');
const adminLocationFilter = document.getElementById('adminLocationFilter');
const refreshBtn = document.getElementById('refreshBtn');
const exportCsvBtn = document.getElementById('exportCsvBtn');

// Detail Modal Elements
const detailModal = document.getElementById('detailModal');
const closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
const closeDetailBtn = document.getElementById('closeDetailBtn');
const detailName = document.getElementById('detailName');
const detailMeta = document.getElementById('detailMeta');
const detailEmail = document.getElementById('detailEmail');
const detailPhone = document.getElementById('detailPhone');
const detailLocation = document.getElementById('detailLocation');
const detailExp = document.getElementById('detailExp');
const detailLanguages = document.getElementById('detailLanguages');
const detailSpecialties = document.getElementById('detailSpecialties');
const detailBio = document.getElementById('detailBio');
const detailStatusBadge = document.getElementById('detailStatusBadge');
const modalApproveBtn = document.getElementById('modalApproveBtn');
const modalRejectBtn = document.getElementById('modalRejectBtn');

// Toast Notification
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✅' : '⚠️'}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// Format relative/readable date
function formatDate(dateString) {
    if (!dateString) return 'Just now';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Fetch Stats & KPIs
async function fetchStats() {
    try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        if (data.success) {
            const s = data.stats;
            totalCountEl.textContent = s.total;
            pendingCountEl.textContent = s.pending;
            approvedCountEl.textContent = s.approved;
            rejectedCountEl.textContent = s.rejected;

            tabCountAll.textContent = s.total;
            tabCountPending.textContent = s.pending;
            tabCountApproved.textContent = s.approved;
            tabCountRejected.textContent = s.rejected;
        }
    } catch (err) {
        console.error('Error loading stats:', err);
    }
}

// Fetch Applications
async function fetchApplications() {
    tableLoading.style.display = 'block';
    tableEmpty.style.display = 'none';
    applicationsTable.style.display = 'none';

    try {
        const queryParams = new URLSearchParams();
        if (activeStatusFilter !== 'all') queryParams.append('status', activeStatusFilter);
        if (currentSearchTerm) queryParams.append('search', currentSearchTerm);
        if (currentLocationFilter !== 'all') queryParams.append('location', currentLocationFilter);

        const res = await fetch(`/api/applications?${queryParams.toString()}`);
        const data = await res.json();

        if (data.success) {
            currentApplications = data.applications || [];
            renderApplicationsTable(currentApplications);
        } else {
            showToast('Failed to load applications', 'error');
        }
    } catch (err) {
        console.error('Error fetching applications:', err);
        showToast('Server connection error', 'error');
    } finally {
        tableLoading.style.display = 'none';
    }
}

// Render Table Rows
function renderApplicationsTable(apps) {
    applicationsTableBody.innerHTML = '';

    if (apps.length === 0) {
        applicationsTable.style.display = 'none';
        tableEmpty.style.display = 'block';
        return;
    }

    tableEmpty.style.display = 'none';
    applicationsTable.style.display = 'table';

    apps.forEach(app => {
        const tr = document.createElement('tr');
        
        // Initials
        const initials = (app.name || 'G')
            .split(' ')
            .map(n => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

        const statusClass = (app.status || 'Pending').toLowerCase();

        // Specialty chips preview
        const specialties = Array.isArray(app.specialties) ? app.specialties : [];
        const chipsHtml = specialties.slice(0, 2).map(s => `<span class="chip">${s}</span>`).join('') +
            (specialties.length > 2 ? `<span class="chip-more">+${specialties.length - 2}</span>` : '');

        tr.innerHTML = `
            <td>
                <div class="applicant-col">
                    <div class="applicant-avatar">${initials}</div>
                    <div class="applicant-meta">
                        <span class="applicant-name">${escapeHtml(app.name)}</span>
                        <span class="applicant-contacts">${escapeHtml(app.email)} · ${escapeHtml(app.phone)}</span>
                    </div>
                </div>
            </td>
            <td>
                <span class="location-badge">📍 ${escapeHtml(app.location)}</span>
            </td>
            <td>
                <strong>${escapeHtml(app.languages || 'Not specified')}</strong>
                <div style="color: #64748b; font-size: 12px; margin-top: 2px;">Exp: ${escapeHtml(app.experience_years || '0-1')} yrs</div>
            </td>
            <td>
                <div class="specialty-chips">
                    ${chipsHtml || '<span style="color: #94a3b8; font-size: 12px;">None specified</span>'}
                </div>
            </td>
            <td>
                <span style="color: #64748b; font-size: 12.5px;">${formatDate(app.created_at)}</span>
            </td>
            <td>
                <span class="status-badge ${statusClass}">
                    ${app.status === 'Approved' ? '● ' : (app.status === 'Pending' ? '◌ ' : '✕ ')}
                    ${app.status}
                </span>
            </td>
            <td class="actions-col">
                <div class="table-actions">
                    <button class="action-btn btn-action-view" onclick="viewApplication(${app.id})" title="View Details">👁</button>
                    ${app.status !== 'Approved' ? `<button class="action-btn btn-action-approve" onclick="updateStatus(${app.id}, 'Approved')" title="Approve">✓</button>` : ''}
                    ${app.status !== 'Rejected' ? `<button class="action-btn btn-action-reject" onclick="updateStatus(${app.id}, 'Rejected')" title="Reject">✕</button>` : ''}
                    <button class="action-btn btn-action-delete" onclick="deleteApplication(${app.id})" title="Delete">🗑</button>
                </div>
            </td>
        `;

        applicationsTableBody.appendChild(tr);
    });
}

// Utility to escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Update Application Status
async function updateStatus(id, newStatus) {
    try {
        const res = await fetch(`/api/applications/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });

        const result = await res.json();
        if (res.ok && result.success) {
            showToast(`Application #${id} marked as ${newStatus}`);
            fetchStats();
            fetchApplications();
            if (selectedApplication && selectedApplication.id === id) {
                closeDetailModal();
            }
        } else {
            showToast(result.message || 'Failed to update status', 'error');
        }
    } catch (err) {
        showToast('Error updating application', 'error');
    }
}

// Delete Application
async function deleteApplication(id) {
    if (!confirm('Are you sure you want to permanently delete this application?')) {
        return;
    }

    try {
        const res = await fetch(`/api/applications/${id}`, {
            method: 'DELETE'
        });

        const result = await res.json();
        if (res.ok && result.success) {
            showToast('Application deleted successfully');
            fetchStats();
            fetchApplications();
        } else {
            showToast('Failed to delete application', 'error');
        }
    } catch (err) {
        showToast('Error deleting application', 'error');
    }
}

// Open Details Modal
function viewApplication(id) {
    const app = currentApplications.find(a => a.id === id);
    if (!app) return;

    selectedApplication = app;
    detailName.textContent = app.name;
    detailMeta.textContent = `Applied on ${formatDate(app.created_at)} · ID: #${app.id}`;
    detailEmail.textContent = app.email;
    detailPhone.textContent = app.phone;
    detailLocation.textContent = app.location;
    detailExp.textContent = `${app.experience_years || '0-1'} Years`;
    detailLanguages.textContent = app.languages || 'None specified';

    // Specialties
    detailSpecialties.innerHTML = '';
    const specs = Array.isArray(app.specialties) ? app.specialties : [];
    if (specs.length > 0) {
        specs.forEach(s => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = s;
            detailSpecialties.appendChild(chip);
        });
    } else {
        detailSpecialties.textContent = 'None specified';
    }

    detailBio.textContent = app.bio || 'No bio provided.';
    
    const statusClass = (app.status || 'Pending').toLowerCase();
    detailStatusBadge.innerHTML = `<span class="status-badge ${statusClass}">${app.status}</span>`;

    // Modal action buttons
    modalApproveBtn.onclick = () => updateStatus(app.id, 'Approved');
    modalRejectBtn.onclick = () => updateStatus(app.id, 'Rejected');

    detailModal.classList.add('is-active');
    detailModal.setAttribute('aria-hidden', 'false');
}

function closeDetailModal() {
    detailModal.classList.remove('is-active');
    detailModal.setAttribute('aria-hidden', 'true');
    selectedApplication = null;
}

if (closeDetailModalBtn) closeDetailModalBtn.onclick = closeDetailModal;
if (closeDetailBtn) closeDetailBtn.onclick = closeDetailModal;
if (detailModal) {
    detailModal.onclick = (e) => {
        if (e.target === detailModal) closeDetailModal();
    };
}

// Export CSV
function exportToCsv() {
    if (!currentApplications.length) {
        showToast('No applications to export', 'error');
        return;
    }

    const headers = ['ID', 'Name', 'Email', 'Phone', 'Location', 'Languages', 'Experience (Years)', 'Specialties', 'Bio', 'Status', 'Submitted At'];
    const rows = currentApplications.map(app => [
        app.id,
        `"${(app.name || '').replace(/"/g, '""')}"`,
        `"${(app.email || '').replace(/"/g, '""')}"`,
        `"${(app.phone || '').replace(/"/g, '""')}"`,
        `"${(app.location || '').replace(/"/g, '""')}"`,
        `"${(app.languages || '').replace(/"/g, '""')}"`,
        `"${app.experience_years || ''}"`,
        `"${(Array.isArray(app.specialties) ? app.specialties.join('; ') : '').replace(/"/g, '""')}"`,
        `"${(app.bio || '').replace(/"/g, '""')}"`,
        app.status,
        app.created_at
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `guido_applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('CSV downloaded successfully');
}

if (exportCsvBtn) exportCsvBtn.onclick = exportToCsv;

// Event Listeners for Filters
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeStatusFilter = tab.getAttribute('data-status');
        fetchApplications();
    });
});

let searchDebounceTimer;
if (adminSearchInput) {
    adminSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            currentSearchTerm = e.target.value.trim();
            fetchApplications();
        }, 300);
    });
}

if (adminLocationFilter) {
    adminLocationFilter.addEventListener('change', (e) => {
        currentLocationFilter = e.target.value;
        fetchApplications();
    });
}

if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
        fetchStats();
        fetchApplications();
        showToast('Dashboard refreshed');
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    fetchStats();
    fetchApplications();
});
