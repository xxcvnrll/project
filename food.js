document.addEventListener("DOMContentLoaded", function () {
  // Find all cards
  const cards = document.querySelectorAll(
    ".card-one, .card-two, .card-three, .card-four, .card-five, .card-six, .card-seven, .card-eight, .card-nine"
  );
  const modals = document.querySelectorAll("[id^='Modal']"); // All modals
  const closeBtns = document.querySelectorAll(".close");

  console.log("Found cards:", cards.length);
  console.log("Found modals:", modals.length);

  // Function to open modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    console.log("Opening modal:", modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  // Function to close modal
  function closeModal(modal) {
    console.log("Closing modal");
    modal.style.display = "none";
  }

  // Add event listeners to each card
  cards.forEach((card, index) => {
    const cardElements = {
      card: card,
      button: card.querySelector(`[class^='button-']`), // Any button class that starts with 'button-'
      dots: card.querySelector(".dots"),
      heart: card.querySelector(".heart"),
    };

    // Map cards to existing modals (only Modal1 and Modal2 exist)
    let modalId;
    if (index === 0) modalId = "Modal1"; // card-one -> Modal1
    else if (index === 1) modalId = "Modal2"; // card-two -> Modal2
    else if (index === 2) modalId = "Modal3"; // card-three -> Modal3
    else if (index === 3) modalId = "Modal4"; // card-four -> Modal4
    else if (index === 4) modalId = "Modal5"; // card-five -> Modal5
    else if (index === 5) modalId = "Modal6"; // card-six -> Modal6
    else modalId = "Modal1"; // All other cards -> Modal1 (you can change this)

    console.log(`Card ${index + 1} (${card.className}) -> ${modalId}`);
    console.log(`Card ${index + 1} elements:`, cardElements);

    // Add click listeners to all interactive elements in this card
    Object.entries(cardElements).forEach(([elementName, element]) => {
      if (element) {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          console.log(`${elementName} clicked on ${card.className}`);
          openModal(modalId);
        });
      }
    });
  });

  // Add close button listeners
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const modal = this.closest(".modal");
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal when clicking outside
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal with Escape key
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
