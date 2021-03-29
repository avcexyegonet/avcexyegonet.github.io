class PrintText {
    constructor() {
        this.textWrap = document.getElementById('text');
        this.title = '';
        this.message = '';
        this.titleTr = '';
        this.messageTr = '';
        this.langIsEng = false;
    }

    static keyCodesRus = {
        0: " ",
        65: "ф",
        66: "и",
        67: "с",
        68: "в",
        69: "у",
        70: "а",
        71: "п",
        72: "р",
        73: "ш",
        74: "о",
        75: "л",
        76: "д",
        77: "ь",
        78: "т",
        79: "щ",
        80: "з",
        81: "й",
        82: "к",
        83: "ы",
        84: "е",
        85: "г",
        86: "м",
        87: "ц",
        88: "ч",
        89: "н",
        90: "я",
        186: "ж",
        188: "б",
        190: "ю",
        219: "х",
        221: "ъ",
        222: "э",
        192: "ё"
    };

    static keyCodesEn = {
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        186: ";",
        188: ",",
        190: ".",
        219: "[",
        221: "]",
        222: "'",
        192: "`"
    }

    /**
     * "t=заголовок&m=текст"
     */
    getText() {
        var url = window.location.search;
        let paramsString = url.substring(url.lastIndexOf('?') + 1);
        let searchParams = new URLSearchParams(paramsString);

        // если язык английский
        if (searchParams.has("en")) {
            this.langIsEng = true;
        }

        // если есть заголовок
        if (searchParams.has("t")) {
            this.titleTr = this.translateText(searchParams.get("t"))
        }

        // если есть текст
        if (searchParams.has("m")) {
            this.messageTr = this.translateText(searchParams.get("m"))
        }

        this.showText();
    }

    //  ?t=71-72-66-68-84-78-0-71-72-66-68-84-78&m=71-72-66-68-84-78-0-71-72-66-68-84-78
    translateText(text) {
        let textArr = text.split('-');
        let result = textArr.map(num => {

            if (this.langIsEng) {
                return PrintText.keyCodesEn[+num];
            } 
            
            return PrintText.keyCodesRus[+num];
        })

        return result.join("");
    }

    showText() {

        if (this.titleTr) {
            let title = document.createElement('h1');
            title.innerHTML = this.titleTr;
            this.textWrap.appendChild(title);
        }

        if (this.messageTr) {
            let message = document.createElement('p');
            message.innerHTML = this.messageTr;
            this.textWrap.appendChild(message);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let text = new PrintText();
    text.getText();
})
