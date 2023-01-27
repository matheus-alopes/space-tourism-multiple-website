const menuBurgerIcon = document.querySelector("main header .menu-burger-img");
const menuBurgerNavigationPage = document.querySelector("main header .menu-burger-navigation");

let menuBurgerNavigationPageClosed = true;

menuBurgerIcon.addEventListener("click", 
    () => {
        if (menuBurgerNavigationPageClosed) {
            menuBurgerIcon.style.transform = "rotate(405deg)";

            menuBurgerNavigationPage.style.width = "65vw";

            menuBurgerNavigationPageClosed = false;
        } else {
            menuBurgerIcon.style.transform = "rotate(0)";

            menuBurgerNavigationPage.style.width = "0";
            
            menuBurgerNavigationPageClosed = true;
        }
        
    }
)