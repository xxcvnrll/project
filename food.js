document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".card-one, .card-two, .card-three, .card-four, .card-five, .card-six, .card-seven, .card-eight, .card-nine, .card-ten, .card-eleven, .card-twelve, .card-thirteen, .card-fourteen, .card-fiveteen"
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
    if (index === 0) modalId = "Modal1"; 
    else if (index === 1) modalId = "Modal2"; 
    else if (index === 2) modalId = "Modal3";
    else if (index === 3) modalId = "Modal4"; 
    else if (index === 4) modalId = "Modal5"; 
    else if (index === 5) modalId = "Modal6"; 
    else if (index === 6) modalId = "Modal7"; 
    else if (index === 7) modalId = "Modal8";
    else if (index === 8) modalId = "Modal9"; 
    else if (index === 9) modalId = "Modal10";
    else if (index === 10) modalId = "Modal11";
    else if (index === 11) modalId = "Modal12"; 
    else if (index === 12) modalId = "Modal13"; 
    else if (index === 13) modalId = "Modal14";
    else if (index === 14) modalId = "Modal15"; 

    else modalId = "Modal1";

    console.log(`Card ${index + 1} (${card.className}) dots -> ${modalId}`);

    if (dots) {
      dots.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Dots clicked on ${card.className}`);
        openModal(modalId);
        console.log("Modal opened")
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
