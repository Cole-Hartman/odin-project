import "./style.css";
import logo from "./img/logo.png";
import food1 from "./img/food1.jpg";
import food2 from "./img/food2.jpg";
import food3 from "./img/food3.jpg";

const home = function () {
  const content = document.createElement("section");
  content.id = "content";

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

  const foodImg = document.createElement("div");
  foodImg.id = "food-image";
  foodImg.className =
    "flex flex-col items-center justify-center w-screen gap-4 px-5 md:flex-row";

  // Array of image sources
  const imageSources = [food1, food2, food3];

  // Create and append images to the container
  imageSources.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "rounded-xl h-60 shadow-2xl";
    foodImg.appendChild(img);
  });
  content.appendChild(foodImg);

  const about = document.createElement("div");
  about.id = "about";
  about.className = "flex flex-col items-center justify-center";

  const h1 = document.createElement("h1");
  h1.className = "text-3xl font-thin py-5";
  h1.textContent = "About";
  about.appendChild(h1);

  const p = document.createElement("p");
  p.className = "text-thin text-center";
  p.textContent =
    "Welcome to AKIRA, where we invite you to embark on a culinary journey through the rich and diverse flavors of Asia. Our restaurant is a vibrant celebration of traditional Asian cuisine, brought to life with modern flair. Our chefs, masters of their craft, use only the freshest ingredients to create dishes that are both authentic and innovative, ensuring a memorable dining experience for every guest.";
  about.appendChild(p);
  content.appendChild(about);

  const footer = document.createElement("div");
  footer.id = "footer";
  footer.className = "flex flex-col md:flex-row justify-around w-full pt-10";

  const hours = document.createElement("div");
  hours.id = "hours";
  hours.className = "text-center pb-10";
  footer.appendChild(hours);

  const hoursH1 = document.createElement("h1");
  hoursH1.classList = "text-2xl font-thin pb-2";
  hoursH1.textContent = "Our Store Hours";
  hours.appendChild(hoursH1);

  const hoursList = document.createElement("ul");
  hoursList.className = "hours-list";

  const hoursData = [
    { day: "Monday", hours: "11:00 AM - 10:00 PM" },
    { day: "Tuesday", hours: "11:00 AM - 10:00 PM" },
    { day: "Wednesday", hours: "11:00 AM - 10:00 PM" },
    { day: "Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday", hours: "11:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
  ];

  // Create and append list items for each day and hours
  hoursData.forEach((dayData) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${dayData.day}:</strong> ${dayData.hours}`;
    hoursList.appendChild(listItem);
  });
  hours.appendChild(hoursList);

  const contactDiv = document.createElement("div");
  contactDiv.id = "contact";
  contactDiv.className = "text-center pb-10";

  const contactHeading = document.createElement("h2");
  contactHeading.className = "text-2xl font-thin pb-2";
  contactHeading.textContent = "Contact Us";
  contactDiv.appendChild(contactHeading);

  const contactInfoList = document.createElement("ul");

  // Array of contact information
  const contactDetails = [
    { type: "Phone", value: "(123) 456-7890" },
    { type: "Email", value: "contact@AkiraBistro.com" },
    { type: "Address", value: "123 Main Street, Cityville, ST 12345" },
  ];

  // Create and append list items for each contact detail
  contactDetails.forEach((detail) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${detail.type}:</strong> ${detail.value}`;
    contactInfoList.appendChild(listItem);
  });
  contactDiv.appendChild(contactInfoList);
  footer.appendChild(contactDiv);

  content.appendChild(footer);
  return content;
};

export default home;
