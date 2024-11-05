import { menuPage } from './js/menuPage';
import { homePage } from './js/homePage';

const pageController = (function(){
const contentDiv = document.getElementById("content");
const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");

homePage();

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = ' ';
    homePage();
});
menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = ' ';
    menuPage();
});

})();