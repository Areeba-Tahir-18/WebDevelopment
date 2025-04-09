

const megaMenuToggle = document.getElementById('megaMenuToggle');
const megaMenu = document.getElementById('megaMenu');

megaMenuToggle.addEventListener('click', function() {
    megaMenu.classList.toggle('active');
});


document.addEventListener('click', function(event) {
    if (!megaMenu.contains(event.target) && !megaMenuToggle.contains(event.target)) {
        megaMenu.classList.remove('active');
    }
});
