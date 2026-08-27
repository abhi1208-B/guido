const searchInput = document.querySelector("#placeSearch");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const noResults = document.querySelector("#noResults");
const cards = [...document.querySelectorAll(".destination-card")];
const categoryButtons = [...document.querySelectorAll(".category-btn")];

let selectedCategory = "all";

function updateResults() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach((card) => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const region = card.querySelector(".destination-info > span").textContent.toLowerCase();
        const categories = card.dataset.category.split(" ");

        const matchesSearch =
            query === "" ||
            name.includes(query) ||
            region.includes(query);

        const matchesCategory =
            selectedCategory === "all" ||
            categories.includes(selectedCategory);

        const visible = matchesSearch && matchesCategory;

        card.style.display = visible ? "" : "none";

        if (visible) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

function clearSearch() {
    searchInput.value = "";
    selectedCategory = "all";

    categoryButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.category === "all");
    });

    updateResults();
    searchInput.focus();
}

searchButton.addEventListener("click", updateResults);
clearButton.addEventListener("click", clearSearch);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        updateResults();
    }
});

searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        updateResults();
    }
});

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach((item) => {
            item.classList.toggle("active", item === button);
        });

        updateResults();
    });
});
