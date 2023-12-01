// ! Imports
import apiKey from "./key.js";

// ! Global Variables
const baseURL = 'https://api.spoonacular.com/recipes/random';

let buildURL = `${baseURL}/?apiKey=${apiKey}`;
const storedRecipes = [];

// ! Dom Elements
const searchForm = document.querySelector('form')
const randomCard = document.querySelector('.random-card')
const keptCards = document.getElementById('kept-cards')

// !Functions

const removeElements = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

const displayRandomCard = recipe => {
    //console.log(recipe);

    removeElements(randomCard)

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img;
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-primary';
    btn.textContent = 'Add';
    btn.onclick = () => {
        storedRecipes.push(recipe);
        setTable();
    }

    //* Attach Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);

}

const setTable =() => {
    console.log('stored recipe array ', storedRecipes)

    removeElements(keptCards);
    storedRecipes.map(obj =>{
    //Create
    let div = document.createElement('div');
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let cardText = document.createElement('p')
    let a = document.createElement('a');

    //Set Attributes
    div.className = 'col'
    card.className = 'card'
    img.src = obj.img;
    img.alt = obj.title;
    img.className = 'card-img-top';
    body.className = 'card-body';
    title.className = 'card-Title'
    title.textContent = obj.title;
    cardText.className = 'card-text'
    a.href = obj.sourceUrl;
    a.target = '_blank';
    a.textContent = 'Link to Recipe'

    // Append to parent
    cardText.appendChild(a);
    body.appendChild(title);
    body.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(body);

    div.appendChild(card);

    keptCards.appendChild(div);
    })
}

// !Event Listeners
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    fetch(buildURL)
    .then(res => res.json())
    .then(data => {
        console.log(data.recipes[0]);
        let recipe = data.recipes[0];

        let obj = {
            title: recipe.title,
            img: recipe.image,
            src: recipe.sourceUrl
        }

        //console.log(obj);

        displayRandomCard(obj);
    })
    .catch(error => console.log(error))
})

