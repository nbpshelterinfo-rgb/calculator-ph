/**
 * Shared Script for Calculator Website
 * Handles mobile menu and common utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideNav = navLinks.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);

            if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// Utility: Format Currency (PHP defaults as user seems PH based)
function formatCurrency(amount, currency = 'PHP') {
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: currency
    }).format(amount);
}
