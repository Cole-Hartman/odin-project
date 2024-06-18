import logo from "./img/logo.png";
import ramen from "./img/ramen.jpg";
import onigiri from "./img/onigiri.jpg";
import tonkatsu from "./img/tonkatsu.webp";
import gyoza from "./img/gyoza.jpg";
import misoSoup from "./img/miso soup.jpg";
import cake from "./img/cake.png";

const menu = function () {
  const content = document.createElement("section");

  //Header Content
  const header = document.createElement("div");
  header.id = "header";
  header.className = "flex justify-center items-center font-thin text-3xl pt-5";
  content.appendChild(header);

  const bistroDiv = document.createElement("div");
  bistroDiv.textContent = "AKIRA BISTRO";
  header.appendChild(bistroDiv);

  const logoImg = document.createElement("img");
  logoImg.src = logo;
  logoImg.className = "h-20";
  header.appendChild(logoImg);

  //Main Content
  const gridContent = document.createElement("div");
  gridContent.classList =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10";

  //Dynamically load menu items
  const imageSources = [
    { name: "Ramen", src: ramen, price: "¥900" },
    { name: "Tonkatsu", src: tonkatsu, price: "¥850" },
    { name: "Gyoza", src: gyoza, price: "¥200" },
    { name: "Onigiri", src: onigiri, price: "¥50" },
    { name: "Miso Soup", src: misoSoup, price: "¥150" },
    { name: "Strawberry Cake", src: cake, price: "¥245" },
  ];
  imageSources.forEach((source) => {
    const menuItem = document.createElement("div");

    const info = document.createElement("div");
    info.innerHTML = `${source.name}: ${source.price}`;
    info.className = "font-thin text-xl";
    menuItem.appendChild(info);

    const img = document.createElement("img");
    img.src = source.src;
    img.className = "rounded-xl h-30 shadow-md mb-5";
    menuItem.appendChild(img);

    gridContent.appendChild(menuItem);
  });

  content.appendChild(gridContent);

  return content;
};

export default menu;
