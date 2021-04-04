const getSearchParams = () => {
    var url = window.location.search;
    let params = url.substring(url.lastIndexOf('?') + 1);

    return new URLSearchParams(params);
}

//include('printText.js')
//include('createLink.js')
//include('typed.js')

document.addEventListener('DOMContentLoaded', () => {
    //let text = new PrintText();
    //text.init();
    startTypedText();
})
