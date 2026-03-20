document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-menu-icon');
    const mobileMenu = document.querySelector('.mobile-nav-menu');

    if (hamburgerIcon && mobileMenu) {
        hamburgerIcon.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
});
