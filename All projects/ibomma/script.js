document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const navItems = document.querySelector('.nav-items');

    toggleButton.addEventListener('click', function() {
        navItems.classList.toggle('show');
    });
});
