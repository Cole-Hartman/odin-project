const myLibrary = [];

// Takes user input and stores the new book objects into an array
document
  .getElementById("add-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formTitle = document.getElementById("title").value;
    const formAuthor = document.getElementById("author").value;
    const formPages = document.getElementById("pages").value;
    const formStatus = document.getElementById("read-status").value;
    const myLibraryBook = [formTitle, formAuthor, formPages, formStatus];
    myLibrary.push(myLibraryBook);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";

    // Hide form after submission
    document.getElementById("form").classList.add("hidden");

    displayLibrary();
  });

function displayLibrary() {
  const readSection = document.getElementById("read-section-book-grid");
  const notReadSection = document.getElementById("not-read-section-book-grid");

  // Clear existing books
  readSection.innerHTML = "";
  notReadSection.innerHTML = "";

  // Loop through array and display each book, each in their own card
  myLibrary.forEach((book, index) => {
    // MAIN CONTAINER
    const containerDiv = document.createElement("div");
    containerDiv.className =
      "border border-blue3 rounded-xl shadow-lg shadow-neutral-700 bg-blue3 text-center p-3";
    containerDiv.id = "book-" + (index + 1);

    // NAME DIV
    const nameDiv = document.createElement("div");
    nameDiv.id = "name";
    nameDiv.className = "font-bold";
    nameDiv.textContent = book[0];
    containerDiv.appendChild(nameDiv);

    // AUTHOR DIV
    const authorDiv = document.createElement("div");
    authorDiv.id = "author";
    authorDiv.textContent = book[1];
    containerDiv.appendChild(authorDiv);

    // STATUS BUTTON
    const statusButton = document.createElement("button");
    statusButton.id = "status-" + index;
    statusButton.className =
      "font-thin mb-3 border border-blue2 rounded-lg px-3 bg-blue2 text-blue3";
    statusButton.textContent = book[3] === "true" ? "Read" : "Not Read";
    containerDiv.appendChild(statusButton);

    // PAGES AND REMOVE
    const pagesAndRemove = document.createElement("div");
    pagesAndRemove.id = "pages-and-remove";
    pagesAndRemove.className = "flex justify-between";
    containerDiv.appendChild(pagesAndRemove);

    // PAGES DIV (Child of PAGES AND REMOVE)
    const pagesDiv = document.createElement("div");
    pagesDiv.id = "pages";
    pagesDiv.textContent = "Pages: " + book[2];
    pagesAndRemove.appendChild(pagesDiv);

    // REMOVE BUTTON (Child of PAGES AND REMOVE)
    const removeButton = document.createElement("button");
    removeButton.id = "remove-book";
    removeButton.className =
      "border-2 border-blue2 bg-blue2 text-gray-300 rounded-lg px-1";
    removeButton.textContent = "Remove";
    pagesAndRemove.appendChild(removeButton);

    // Add event listener to remove button
    removeButton.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      displayLibrary();
    });

    // Add event listener to status button
    statusButton.addEventListener("click", function () {
      book[3] = book[3] === "true" ? "false" : "true";
      displayLibrary();
    });

    if (book[3] === "true") {
      readSection.appendChild(containerDiv);
    } else {
      notReadSection.appendChild(containerDiv);
    }
  });
}

// BUTTON SCROLL FEATURES
// For Mobile
document
  .getElementById("mobile-read-button")
  .addEventListener("click", function () {
    document
      .getElementById("read-section")
      .scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("mobile-not-read-button")
  .addEventListener("click", function () {
    document
      .getElementById("not-read-section")
      .scrollIntoView({ behavior: "smooth" });
  });

// For Desktop
document
  .getElementById("desktop-read-button")
  .addEventListener("click", function () {
    document
      .getElementById("read-section")
      .scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("desktop-not-read-button")
  .addEventListener("click", function () {
    document
      .getElementById("not-read-section")
      .scrollIntoView({ behavior: "smooth" });
  });

// New Book Form | Read / Not Read Button
function toggleReadStatus() {
  const readStatusButton = document.getElementById("read-status-toggle");
  const readStatusInput = document.getElementById("read-status");

  if (readStatusInput.value === "false") {
    readStatusButton.textContent = "Read";
    readStatusInput.value = "true";
    readStatusButton.classList.remove("bg-red-400");
    readStatusButton.classList.add("bg-green-400");
  } else {
    readStatusButton.textContent = "Not Read";
    readStatusInput.value = "false";
    readStatusButton.classList.remove("bg-green-400");
    readStatusButton.classList.add("bg-red-400");
  }
}

// Bring up form
document
  .getElementById("desktop-new-book-button")
  .addEventListener("click", function () {
    document.getElementById("form").classList.remove("hidden");
  });

document
  .getElementById("mobile-new-book-button")
  .addEventListener("click", function () {
    document.getElementById("form").classList.remove("hidden");
  });
