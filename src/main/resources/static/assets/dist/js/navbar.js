const navLinks = document.querySelector('.nav-links')
const onToggleMenu = (e) => {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]')
}