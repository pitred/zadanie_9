var menu = document.getElementById('main-nav');
var showHideBtn = document.getElementById('hamburger-menu');

function showSidebar() {
    menu.classList.remove('main-menu__items--hidden');
}

function hideSidebar() {
    menu.classList.add('main-menu__items--hidden');
}

showHideBtn.addEventListener('click', function () {
    if (menu.classList.contains('main-menu__items--hidden')) {
        showSidebar();
    } else {
        hideSidebar();
    }
}, hideSidebar());