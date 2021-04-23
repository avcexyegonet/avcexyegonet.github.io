function slideToggle(item, list) {
   const content = item.querySelector('.content');
   const openSelector = 'is-open';

   item.addEventListener('click', () => {
        if (item.classList.contains(openSelector)) {
            closeItem(item, content)
        } else {
            for (let i of list) {
                if (i.classList.contains(openSelector)) {
                    closeItem(i, i.querySelector('.content'))    
                }
            }

            item.classList.add(openSelector);
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });

    function closeItem(item, content) {
        item.classList.remove(openSelector);
        content.style.maxHeight = 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slideToggleElList = document.querySelectorAll('.js-slide-toggle');
    for (let item of slideToggleElList) {
        slideToggle(item, slideToggleElList)
    }
})
