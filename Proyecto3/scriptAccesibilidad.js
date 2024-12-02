document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.getElementById('enlaceAccesibilidad');
    const currentUrl = window.location.pathname;

    if (currentUrl.endsWith('accesibilidad.html') || currentUrl === '/') {
        logoLink.removeAttribute('href');
        logoLink.style.cursor = 'default';
    }
});