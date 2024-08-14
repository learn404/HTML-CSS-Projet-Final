const header = document.querySelector('header');
document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`); // Définit la hauteur du header


// fait défiler la page jusqu'à l'élément ciblé

function scrollToElement(element) {
    window.scrollTo({
        top: element.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    });
}
