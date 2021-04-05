const text = [
    'Если ты&nbsp;можешь сидеть в&nbsp;тишине, получив дурную весть',
    'Если спокойно сносишь все удары судьбы',
    'Если ешь всё, что лежит на&nbsp;твоей тарелке',
    'Если бегаешь днём, а&nbsp;ночью засыпаешь без вина и&nbsp;таблеток',
    'Если ты&nbsp;счастлив независимо от&nbsp;того, где ты&nbsp;есть',
    'Скорее всего ты...'
]

function addSignature() {
    let sign = document.createElement('div');
    sign.classList.add('g-content__sign');
    sign.innerHTML = 'х/ф "Мой пёс идиот"';
    let content = document.querySelector('.g-content');
    content.appendChild(sign);

    let signText = document.querySelector('.g-content__sign');
    signText.classList.add('fade-in-out-blur');
}

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
            setTimeout(() => {
                document.querySelector(textSelector).classList.add('fade-out-blur');
                document.querySelector(pictureSelector).classList.add('fade-in-blur');
                addSignature();
            }, 1500)
        }
    });
}
