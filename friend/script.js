const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow = "0 15px 35px rgba(255,79,163,.4)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "0 10px 20px rgba(0,0,0,.1)";

});

});