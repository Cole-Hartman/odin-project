import logo from "./img/logo.png";
import lobby from "./img/lobby.jpg";
import lobby2 from "./img/lobby2.jpg";

const about = function () {
  const content = document.createElement("section");
  content.classList = "overflow-hidden";
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
  const imageSources = [lobby, lobby2];

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
  h1.textContent = "More About Us";
  about.appendChild(h1);

  const p = document.createElement("p");
  p.className = "text-thin text-center mx-5";
  p.textContent =
    "Tucked away in a charming corner of the city, Akira Bistro is a culinary gem that transports diners to the heart of Asia with every bite. Founded by the visionary Chef Akira Watanabe, a master of Japanese cuisine who honed his skills under the tutelage of Tokyo's most revered chefs, this intimate bistro offers an authentic and elevated dining experience that pays homage to the rich culinary traditions of the East. Our meticulously crafted menu is a harmonious fusion of flavors that celebrate the diversity of Asian cuisine. From the delicate artistry of meticulously rolled sushi to the bold and fragrant curries that awaken the senses, each dish is a testament to the passion and skill of our talented chefs. Sourcing only the finest and freshest ingredients, we ensure that every plate is a masterpiece, expertly balanced and bursting with authentic flavors that will transport you to the bustling streets of Tokyo, the vibrant markets of Bangkok, or the serene landscapes of rural China. Whether you're a connoisseur seeking an exquisite dining experience or a curious adventurer eager to explore new culinary horizons, Akira Bistro promises an unforgettable journey for your taste buds.";
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

export default about;
