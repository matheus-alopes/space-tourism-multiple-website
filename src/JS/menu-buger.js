const menuBurgerIcon = document.querySelector("main header .menu-burger-img");
const menuBurgerNavigationPage = document.querySelector("main header .menu-burger-navigation");

let menuBurgerNavigationPageClosed = true;

menuBurgerIcon.addEventListener("click", 
    () => {
        if (menuBurgerNavigationPageClosed) {
            menuBurgerIcon.style.transform = "rotate(45deg)";
            // menuBurgerIcon.style.transform = "rotateY(360deg)";

            menuBurgerNavigationPage.style.display = "block";

            menuBurgerNavigationPageClosed = false;
        } else {
            menuBurgerIcon.style.transform = "rotate(0)";

            menuBurgerNavigationPage.style.display = "none";

            menuBurgerNavigationPageClosed = true;
        }
        
    }
)