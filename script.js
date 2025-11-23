const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('#nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        const opened = navLinks.classList.toggle('show');
        menuIcon.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
}