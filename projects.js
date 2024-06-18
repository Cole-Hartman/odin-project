document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#card");

  cards.forEach((card) => {
    card.className =
      "cursor-pointer text-center border-0 rounded-lg bg-slate-500 font-mono text-xl py-5 w-3/4 lg:w-2/5";
  });

  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      console.log("test");
      card.classList.add("bg-slate-700", "shadow-xl", "text-2xl");
    });
  });

  cards.forEach((card) => {
    card.addEventListener("mouseout", function () {
      console.log("test");
      card.classList.remove("bg-slate-700", "shadow-xl", "text-2xl");
    });
  });
});
