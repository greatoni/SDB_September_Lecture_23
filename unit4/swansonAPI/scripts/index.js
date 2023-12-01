// !Global Vairables

const clickable = document.querySelector("div")
const h3 = document.querySelector('h3');
const baseURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

// ! Event Listener
clickable.addEventListener('click', e=> {
    getQuote()
})

// ! Display (function)

const getQuote = async() => {
    //console.log('test')
    fetch(baseURL)
        .then(response => response.json())
        .then(obj => {
            let quotes = obj[0];
            h3.textContent = quotes;
            console.log(obj[0]);
        }) 

    //const response = await fetch(baseURL)
    //const data = await response.

}