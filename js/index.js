const buttons = document.querySelectorAll(".clients__button");
const cards = document.querySelectorAll(".clients__card");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("clients__button_active");
    });
    cards.forEach((card) => {
      card.classList.remove("clients__card_active");
    });

    button.classList.add("clients__button_active");
    cards[index].classList.add("clients__card_active");
  });
});
