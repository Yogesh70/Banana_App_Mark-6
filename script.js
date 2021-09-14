const inputTxt = document.querySelector('#input-area');
const translateBtn = document.querySelector('.btn-translate');
const outputTxt = document.querySelector('#output-area');

let url = 'https://api.funtranslations.com/translate/minion.json';

function generateUrl(txt){
    return url + '?text=' + txt;
}

function errorHandler(error){
    console.log(error);
    alert('Something went wrong try again later');
}

function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        outputTxt.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

function clickHandler() {
    // console.log('click');
    let url = generateUrl(inputTxt.value);
    fetchData(url);
}

translateBtn.addEventListener('click',clickHandler);