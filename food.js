const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipeList = document.getElementById('recipeList');

// Данные (массив рецептов)
const recipes = [
  "Greek soup with pumpkin",
  "Italian pasta recipes",
  "Chicken stir fry",
  "Vegetarian salads",
  "Dessert recipes",
  "Healthy smoothies",
  "Pizza recipes",
  "Asian cuisine"
];

// Функция отрисовки списка
function displayRecipes(list) {
  recipeList.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    recipeList.appendChild(li);
  });
}

// Поиск
function performSearch() {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r => r.toLowerCase().includes(query));
  displayRecipes(filtered);
}

// События
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch);

// При загрузке показываем все рецепты
displayRecipes(recipes);



document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".card-one, .card-two, .card-three, .card-four, .card-five, .card-six, .card-seven, .card-eight, .card-nine"
  );
  const modals = document.querySelectorAll("[id^='Modal']");
  const closeBtns = document.querySelectorAll(".close");

  console.log("Found cards:", cards.length);
  console.log("Found modals:", modals.length);

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    console.log("Opening modal:", modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal(modal) {
    console.log("Closing modal");
    modal.style.display = "none";
  }

  cards.forEach((card, index) => {
    const dots = card.querySelector(".dots");

    let modalId;
    if (index === 0) modalId = "Modal1"; // card-one -> Modal1
    else if (index === 1) modalId = "Modal2"; // card-two -> Modal2
    else if (index === 2) modalId = "Modal3"; // card-three -> Modal3
    else if (index === 3) modalId = "Modal4"; // card-four -> Modal4
    else if (index === 4) modalId = "Modal5"; // card-five -> Modal5
    else if (index === 5) modalId = "Modal6"; // card-six -> Modal6
    else if (index === 6) modalId = "Modal7"; // card-seven -> Modal7
    else if (index === 7) modalId = "Modal8"; // card-eight -> Modal8
    else if (index === 8) modalId = "Modal9"; // card-nine -> Modal9
    else modalId = "Modal1";

    console.log(`Card ${index + 1} (${card.className}) dots -> ${modalId}`);

    if (dots) {
      dots.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Dots clicked on ${card.className}`);
        openModal(modalId);
      });
    } else {
      console.log(`No dots found in ${card.className}`);
    }
  });

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const modal = this.closest(".modal");
      if (modal) {
        closeModal(modal);
      }
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal with Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.style.display === "block") {
          closeModal(modal);
        }
      });
    }
  });
});
