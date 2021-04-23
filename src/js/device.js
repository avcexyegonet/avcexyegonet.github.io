function cardRevert(selector) {
    const cardList = document.querySelectorAll(selector);

    for (let card of cardList) {
        card.addEventListener('click', () => {
            card.classList.toggle('is-active');
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cardRevert('.device')
})