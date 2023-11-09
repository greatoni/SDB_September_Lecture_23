// TODO: GLOBAL VARIABLES
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = []; //mock database!!


// console.log(form.species);
// console.log(Object.values(form))
// console.log(form[0].placeholder)

// TODO: EVENT LISTENERS
form.addEventListener('submit', e => {
    e.preventDefault();


    const animal  = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }

    //console.log(animal)

    animals.push(animal);

    form.reset(); // clears the form
    form[0].focus(); //targets the first form when it is submitted

    displayTable()
});



// TODO: Display output in table.

function displayTable() {
    
    //Clears out an array by systematically targeting the first child of it until the array is gone.
    while(table.firstChild) {
        table.removeChild(table.firstChild)
    }



    animals.forEach((animal,i) => {
    // *Create the elements
    let tr = document.createElement('tr');
    let id = document.createElement('td');  
    let name = document.createElement('td');  
    let sex = document.createElement('td');  
    let species = document.createElement('td');
    
    // * Assign content to the elements, from the animal in the array!
    id.textContent = i + 1;
    name.textContent = animal.name;
    sex.textContent = animal.sex;
    species.textContent = animal.species;

    // * Append/Set

    tr.appendChild(id)
    tr.appendChild(name)
    tr.appendChild(species)
    tr.appendChild(sex)
    table.appendChild(tr)
    })
}