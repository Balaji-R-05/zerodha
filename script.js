const menuIcon = document.querySelector('#menu-icon');
const megaMenu = document.querySelector('#mega-menu');

if (menuIcon && megaMenu) {
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = megaMenu.classList.toggle('show');
        menuIcon.classList.toggle('open', isOpen);
        
        // Prevent body scroll when menu is open on mobile
        if (window.innerWidth < 992) {
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
    });

    // Close menu when clicking a link
    megaMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            megaMenu.classList.remove('show');
            menuIcon.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.onclick = function(e) {
        if (!megaMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            megaMenu.classList.remove('show');
            menuIcon.classList.remove('open');
            document.body.style.overflow = '';
        }
    };
}