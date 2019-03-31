var sidebar = document.querySelector('.sidebar-nav');
var showHideBtn = document.getElementById('hamburger-menu');

showHideBtn.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-nav--visible');
    showHideBtn.classList.toggle('hamburger-menu--clicked');
});