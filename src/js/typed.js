const text = [
    'Если ты&nbsp;можешь сидеть в&nbsp;тишине, получив дурную весть',
    'Если спокойно сносишь все удары судьбы',
    'Если ешь всё, что лежит на&nbsp;твоей тарелке',
    'Если бегаешь днём, а&nbsp;ночью засыпаешь без вина и&nbsp;таблеток',
    'Если ты&nbsp;счастлив независимо от&nbsp;того, где ты&nbsp;есть',
    'Скорее всего ты...'
]

function startTypedText() {
    let textSelector = '.g-content__text';
    let pictureSelector = '.g-content__picture';
    let typed = new Typed(textSelector, {
        strings: text,
        typeSpeed: 50,
        backDelay: 1000,
        fadeOut: true,
        showCursor: false,

        // default
        startDelay: 0,
        stringsElement: null,
        backSpeed: 0,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
  
        onComplete: (self) => {
            document.querySelector(pictureSelector).classList.add('fade-in-blur')
            setTimeout(() => {
                document.querySelector(textSelector).classList.add('fade-out-blur')
            }, 1500)
        }
    });
}
