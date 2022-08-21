const elSiteThemeToggler = document.querySelector('.button');

elSiteThemeToggler.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});