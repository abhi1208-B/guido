const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Database Setup (SQLite)
const dbPath = path.join(dataDir, 'guido.db');
const db = new DatabaseSync(dbPath);

// Initialize schema
db.exec(`
    CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        location TEXT NOT NULL,
        languages TEXT NOT NULL,
        experience_years TEXT,
        specialties TEXT,
        bio TEXT NOT NULL,
        status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Seed initial sample applications if empty
const countStmt = db.prepare('SELECT COUNT(*) as count FROM applications');
const totalCount = countStmt.get().count;

if (totalCount === 0) {
    const insertSample = db.prepare(`
        INSERT INTO applications (name, email, phone, location, languages, experience_years, specialties, bio, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now', ?))
    `);

    insertSample.run(
        'Ravi Kumar',
        'ravi.kumar@example.com',
        '+91 98450 12345',
        'Hampi (Vijayanagara)',
        'Kannada, English, Hindi, Telugu',
        '5+',
        JSON.stringify(['Heritage & Architecture', 'Trekking & Mountains']),
        'Born and raised in Hampi. I know every boulder and forgotten temple in the ruins of the Vijayanagara Empire. Guiding travelers for 7+ years.',
        'Approved',
        '-2 days'
    );

    insertSample.run(
        'Ananya Gowda',
        'ananya.gowda@example.com',
        '+91 99800 67890',
        'Coorg (Kodagu)',
        'Kannada, English, Kodava',
        '3-5',
        JSON.stringify(['Wildlife & Nature', 'Local Food & Cuisine', 'Trekking & Mountains']),
        'Certified naturalist and coffee planter. Passionate about showing travelers the authentic Coorg plantation lifestyle and secret waterfalls.',
        'Approved',
        '-1 days'
    );

    insertSample.run(
        'Siddharth Hegde',
        'sid.hegde@example.com',
        '+91 94480 34567',
        'Gokarna (Uttara Kannada)',
        'Kannada, English, Hindi, Konkani',
        '1-3',
        JSON.stringify(['Beaches & Coastal', 'Adventure & Sports']),
        'Surfing enthusiast and coastal trail expert in Gokarna and Kumta. Love guiding cliff treks and sunset kayaking.',
        'Pending',
        '-3 hours'
    );
}

// Serve Static Files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Static Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'admin.html'));
});

// ==========================================
// REST API ENDPOINTS
// ==========================================

// 1. Submit a new application
app.post('/api/applications', (req, res) => {
    try {
        const { name, email, phone, location, languages, experienceYears, specialties, bio } = req.body;

        if (!name || !email || !phone || !location || !languages || !bio) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields (name, email, phone, location, languages, bio).'
            });
        }

        const specialtiesJson = JSON.stringify(Array.isArray(specialties) ? specialties : (specialties ? [specialties] : []));

        const insertStmt = db.prepare(`
            INSERT INTO applications (name, email, phone, location, languages, experience_years, specialties, bio, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Pending')
        `);

        const info = insertStmt.run(
            name.trim(),
            email.trim().toLowerCase(),
            phone.trim(),
            location.trim(),
            languages.trim(),
            experienceYears || '0-1',
            specialtiesJson,
            bio.trim()
        );

        const newApp = db.prepare('SELECT * FROM applications WHERE id = ?').get(info.lastInsertRowid);
        if (newApp && newApp.specialties) {
            try { newApp.specialties = JSON.parse(newApp.specialties); } catch (e) {}
        }

        return res.status(201).json({
            success: true,
            message: 'Application submitted successfully!',
            application: newApp
        });
    } catch (error) {
        console.error('Error submitting application:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while saving application.'
        });
    }
});

// 2. Get all applications (with search & status filter)
app.get('/api/applications', (req, res) => {
    try {
        const { status, search, location } = req.query;

        let query = 'SELECT * FROM applications WHERE 1=1';
        const params = [];

        if (status && status !== 'all') {
            query += ' AND status = ?';
            params.push(status);
        }

        if (location && location !== 'all') {
            query += ' AND location LIKE ?';
            params.push(`%${location}%`);
        }

        if (search) {
            query += ' AND (name LIKE ? OR email LIKE ? OR phone LIKE ? OR location LIKE ? OR languages LIKE ?)';
            const term = `%${search}%`;
            params.push(term, term, term, term, term);
        }

        query += ' ORDER BY created_at DESC';

        const stmt = db.prepare(query);
        const rows = stmt.all(...params);

        const parsedRows = rows.map(row => {
            let specialties = [];
            try {
                specialties = JSON.parse(row.specialties || '[]');
            } catch (e) {
                specialties = [];
            }
            return {
                ...row,
                specialties
            };
        });

        return res.json({
            success: true,
            count: parsedRows.length,
            applications: parsedRows
        });
    } catch (error) {
        console.error('Error fetching applications:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while fetching applications.'
        });
    }
});

// 3. Get single application by ID
app.get('/api/applications/:id', (req, res) => {
    try {
        const { id } = req.params;
        const stmt = db.prepare('SELECT * FROM applications WHERE id = ?');
        const row = stmt.get(Number(id));

        if (!row) {
            return res.status(400).json({ success: false, message: 'Application not found.' });
        }

        try {
            row.specialties = JSON.parse(row.specialties || '[]');
        } catch (e) {
            row.specialties = [];
        }

        return res.json({ success: true, application: row });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// 4. Update application status (Pending / Approved / Rejected)
app.patch('/api/applications/:id/status', (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['Pending', 'Approved', 'Rejected'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status. Allowed values: Pending, Approved, Rejected.'
            });
        }

        const updateStmt = db.prepare('UPDATE applications SET status = ? WHERE id = ?');
        const result = updateStmt.run(status, Number(id));

        if (result.changes === 0) {
            return res.status(404).json({ success: false, message: 'Application not found.' });
        }

        const updated = db.prepare('SELECT * FROM applications WHERE id = ?').get(Number(id));
        if (updated && updated.specialties) {
            try { updated.specialties = JSON.parse(updated.specialties); } catch (e) {}
        }

        return res.json({
            success: true,
            message: `Application marked as ${status}.`,
            application: updated
        });
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ success: false, message: 'Server error while updating status.' });
    }
});

// 5. Delete an application
app.delete('/api/applications/:id', (req, res) => {
    try {
        const { id } = req.params;
        const deleteStmt = db.prepare('DELETE FROM applications WHERE id = ?');
        const result = deleteStmt.run(Number(id));

        if (result.changes === 0) {
            return res.status(404).json({ success: false, message: 'Application not found.' });
        }

        return res.json({ success: true, message: 'Application deleted successfully.' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error while deleting.' });
    }
});

// 6. Statistics overview
app.get('/api/stats', (req, res) => {
    try {
        const total = db.prepare('SELECT COUNT(*) as count FROM applications').get().count;
        const pending = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'Pending'").get().count;
        const approved = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'Approved'").get().count;
        const rejected = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'Rejected'").get().count;

        return res.json({
            success: true,
            stats: {
                total,
                pending,
                approved,
                rejected
            }
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error fetching statistics.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(`🚀 Guido Guide Server running on http://localhost:${PORT}`);
    console.log(`📋 Public Portal:   http://localhost:${PORT}/`);
    console.log(`🛡️  Admin Dashboard: http://localhost:${PORT}/admin`);
    console.log(`💾 Database:        ${dbPath}`);
    console.log(`=============================================`);
});
