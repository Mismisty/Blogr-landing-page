
const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');

const navWrapper = document.getElementById('nav-wrapper');
const showContainer = document.getElementById('container');

const modernPlatform = document.getElementById('modern-platform');

/*----TO SHOW THE TOP NAV MENU ON CLICK--- */

document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', () => {
        const clickedSubmenu = item.nextElementSibling;
        const arrow = item.querySelector('.arrow-mobile');

    //---CLOSE ALL OPEN SUB-MENUS FOR DESKTOP
    
    document.querySelectorAll('.sub-menu').forEach(menu => {
        if (menu !== clickedSubmenu) {
            menu.classList.remove('show');
            const otherArrow = menu.previousElementSibling?.querySelector('.arrow-mobile');
            if (otherArrow) otherArrow.classList.remove('rotated');
        }
    });

    //TOGGLE THE SUB-MENU

        if (clickedSubmenu && clickedSubmenu.classList.contains('sub-menu')){
            const isOpen = clickedSubmenu.classList.toggle('show');

            if (arrow) {
                arrow.classList.toggle('rotated', isOpen);
            }
        }
    });
});



//TO HIDE THE MAIN CONTAINER FOR MOBILE

function toggleMobileMenu() {
    navWrapper.classList.toggle('show-menu');
    //console.log(navWrapper.classList);
    modernPlatform.classList.toggle('hidden');
    showContainer.classList.toggle('hidden');
    openMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');

};

openMenu.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);

//console.log(navWrapper.classList)
