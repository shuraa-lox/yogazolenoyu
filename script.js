function highlight() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.remove("active");
    });

    // случайно выбираем тренировку
    let random = Math.floor(Math.random() * cards.length);
    cards[random].classList.add("active");
}