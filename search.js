// Global search function for all pages
function searchCalculators() {
    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');

    // Get the search term from whichever input has a value
    let searchTerm = '';
    if (searchInput && searchInput.value) {
        searchTerm = searchInput.value.toLowerCase();
    } else if (searchInputMobile && searchInputMobile.value) {
        searchTerm = searchInputMobile.value.toLowerCase();
    }

    // Sync both search inputs only if they exist
    if (searchInput && searchInputMobile) {
        if (document.activeElement === searchInput) {
            searchInputMobile.value = searchInput.value;
        } else if (document.activeElement === searchInputMobile) {
            searchInput.value = searchInputMobile.value;
        }
    }

    // Redirect to home page with search query
    if (searchTerm) {
        window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
    }
}
