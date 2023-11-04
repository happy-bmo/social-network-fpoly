const navLinks = document.querySelector('.nav-links')
console.log(navLinks)
const onToggleMenu = (e) => {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]')
}