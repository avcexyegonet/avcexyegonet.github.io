class PrintText {
    constructor() {
        this.textWrap = document.getElementById('text');
        this.title = '';
        this.message = '';
        this.langIsEng = false;
    }

    init() {
        this.getText();
    }

    getText() {
        let searchParams = getSearchParams();

        // если формировать ссылку
        if (searchParams.has("createlink")) {
            let createLink = new CreateLink(searchParams);
            createLink.init();
            return false;
        }

        // если язык английский
        if (searchParams.has("en")) {
            this.langIsEng = true;
        }

        // если есть заголовок
        if (searchParams.has("t")) {
            this.title = searchParams.get("t")
        }

        // если есть текст
        if (searchParams.has("m")) {
            this.message = searchParams.get("m")
        }

        this.showText();
    }

    showText() {
        if (this.title) {
            let title = document.createElement('h1');
            title.innerHTML = this.title;
            this.textWrap.appendChild(title);
        }

        if (this.message) {
            let message = document.createElement('p');
            message.innerHTML = this.message;
            this.textWrap.appendChild(message);
        }
    }
}