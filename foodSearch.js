let input = document.querySelector(".form-control")
let form = document.getElementById("searchForm");
let cards = document.querySelectorAll(".card");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let input_variable = input.value.trim().toLowerCase();
    console.log(input_variable);
    cards.forEach(function(card) {
      if(input_variable != ""){
        if(card.querySelector("h1").innerHTML.toLowerCase().includes(input_variable)){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      } else{
        card.style.display = "block";
      }
    })
});