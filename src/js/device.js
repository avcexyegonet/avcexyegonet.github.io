function cardRevert(selector) {
    const cardList = document.querySelectorAll(selector)
    const activeSelector = 'is-active'

    for (let card of cardList) {
        card.addEventListener('click', () => card.classList.contains(activeSelector) ? false : card.classList.add(activeSelector))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cardRevert('.device')
})