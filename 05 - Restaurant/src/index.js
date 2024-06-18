import "./style.css";
import home from "./home";
import menu from "./menu";
import about from "./about";

document.addEventListener("DOMContentLoaded", function () {
  const nav1 = document.getElementById("nav1");
  const nav2 = document.getElementById("nav2");
  const nav3 = document.getElementById("nav3");

  const homePage = home();
  const menuPage = menu();
  const aboutPage = about();
  const mainContent = document.getElementById("main-content");

  mainContent.appendChild(homePage);

  function clearNavStates() {
    nav1.className = "";
    nav2.className = "";
    nav3.className = "";
  }

  //Home
  nav1.addEventListener("click", function () {
    clearNavStates();
    nav1.className = "bg-animeRed-500 bg-opacity-60 px-5 rounded-xl";
    mainContent.innerHTML = "";
    mainContent.appendChild(homePage);
  });

  //Menu
  nav2.addEventListener("click", function () {
    clearNavStates();
    nav2.className = "bg-animeRed-500 bg-opacity-60 px-5 rounded-xl";
    mainContent.innerHTML = "";
    mainContent.appendChild(menuPage);
  });

  //About
  nav3.addEventListener("click", function () {
    clearNavStates();
    nav3.className = "bg-animeRed-500 bg-opacity-60 px-5 rounded-xl";
    mainContent.innerHTML = "";
    mainContent.appendChild(aboutPage);
  });
});
