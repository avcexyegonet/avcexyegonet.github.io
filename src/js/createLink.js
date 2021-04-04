class CreateLink {
    constructor() {
        this.title;
        this.message;
        this.form;
        this.inputTitle;
        this.inpitMessage;
        this.buttonSubmit;
        this.linkCounter = 1;
    }

    init() {
        this.appendForm();
    }

    appendForm() {
        this.form = document.createElement('div');
        this.form.setAttribute('id', 'form');
        document.body.appendChild(this.form);

        this.inputTitle = document.createElement('input');
        this.inputTitle.setAttribute('placeholder', 'title');
        this.form.appendChild(this.inputTitle);

        this.inputMessage = document.createElement('textarea');
        this.inputMessage.setAttribute('placeholder', 'message');
        this.form.appendChild(this.inputMessage);

        this.buttonSubmit = document.createElement('button');
        this.buttonSubmit.innerHTML = 'create';
        this.form.appendChild(this.buttonSubmit);

        this.buttonSubmit.addEventListener('click', () => {
            this.title = this.inputTitle.value
            this.message = this.inputMessage.value
            this.createLink();
        })
    }

    createLink() {
        // если есть заголовок
        if (this.title) {
            this.title = encodeURI(this.title)
        }

        // если есть текст
        if (this.message) {
            this.message = encodeURI(this.message)
        }

        let oldLink = document.getElementById('link');
        let link = `https://avcexyegonet.github.io/dist/?t=${this.title}&m=${this.message}`;

        if (oldLink) {
            oldLink.setAttribute('href', link);
            this.linkCounter++;
            oldLink.innerHTML = `link ${this.linkCounter}`;
        } else {
            let linkEl = document.createElement('a');
            linkEl.innerHTML = 'link';
            linkEl.setAttribute('id', 'link');
            linkEl.setAttribute('href', link);
            linkEl.setAttribute('target', '_blanck');
            this.form.appendChild(linkEl);
        }
    }
}