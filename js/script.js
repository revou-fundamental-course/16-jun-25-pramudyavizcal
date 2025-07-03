
// ---------toggle menu ---------

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('translate-x-full');
        navLinks.classList.toggle('translate-x-0');
    });