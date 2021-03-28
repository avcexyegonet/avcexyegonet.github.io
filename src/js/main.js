class PrintText {
    constructor() {
        this.textWrap = document.getElementById('text');
        this.title = '';
        this.message = '';
    }

    /**
     * t - заголовок, b - текст
     */
    init() {

        //var url = window.location.href;
        //console.log(url.substring(url.lastIndexOf('/')+1));

        let paramsString = "t=Заголовок+большой!&m=Текст+разный+совсем+можно";
        let searchParams = new URLSearchParams(paramsString);

        // если есть заголовок
        if (searchParams.has("t")) {
            this.title = searchParams.get("t")
        }

        // если есть текст
        if (searchParams.has("m")) {
            this.message = searchParams.get("m")
        }

        //this.showText();
    }

    showText() {
        let title = document.createElement('h1');
        title.innerHTML = this.title;

        let message = document.createElement('p');
        message.innerHTML = this.message;

        this.textWrap.appendChild(title);
        this.textWrap.appendChild(message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let text = new PrintText();
    text.init();
})
