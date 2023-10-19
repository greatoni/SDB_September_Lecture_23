// !Iteration Methods
/* 
    - Do not destroy the original array.
    - Takes in a callback function.
*/

let fruits = ['apple', 'pear', 'orange', 'raspberry', 'pineapple']

// * Arrow Function with block body!
const filteredFruit = fruits.filter( fruit => {
    let result = fruit !== 'apple';
    return result;
})

//console.log(filteredFruit);

let fruit1 = 'pineapple';
//console.log(fruit1.includes('apple'))


// * Arrow Function without block body!
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('orange'))
console.log(filteredFruit2);

//*  Function Example
function removeMango(fruit) {
    return fruit !== 'pear';
}

const filterFruit3 = fruits.filter(removeMango);
console.log("Filtered: ",filterFruit3);
console.log("Original: ",fruits);

console.log(removeMango('pear'));

/* 
! Challenge:
    How to remove 5s from an array?
    Store it into a new variable!
*/

let numAway = [5,5,5,5,1,2,3,5,6,1,6,1,5,1]

function removefives(num){
    return num !== 5;
}

const noFives = numAway.filter(removefives)
console.log(noFives);

let movies = [ 
{ name: "Top Gun 2", genre: "Volleyball"},
{ name: "Top Gun Maverick", genre: "Volleyball"},
];

movies.push({ name: "Top Gun 1", genre: "Volleyball"})
movies.push({ name: "Get Out", genre: "Horror"})
movies.push({ name: "Super Hornio Bros", genre: "Owned by Nintendo and thus Canon"})

const VolleyballMovies = movies.filter(movie => movie.genre === "Volleyball" )

console.log(VolleyballMovies)


// ! .forEach()
let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

newFoodList.forEach(item => console.log('ForEach: ', item))

newFoodList.forEach(item => {
    item === "apple" ? newFoodList.push('red') :
    item === 'pear' ? newFoodList.push('green') : null
    console.log('ForEach: ', item)
})

//newFoodList.forEach(item, index) => {
//   console.log('forEach: ', item, "! index: ", index, "!")
//}


let systems = [
    "DnD", "PathFinder", "Lamentations", "OSE"
]

systems.push("LOTUS");

systems.splice(0,1,"FIST");

systems.push("DnD")

systems.pop();

systems.forEach(item =>
{
    console.log(item);
})


// ! .find()

let friends = [
    'Denny', 'Markus', 'Roland', 'Annie'
]

let friend = 'Markus';
console.log('Find: ', friends.find(c => c == friend))

friend = 'Dennise'
console.log('Find: ', friends.find(c => c == friend))

friend = 'Denny'
friends.find((c,i) => console.log('Index:  ', c == friend, "index: ", i))

// ! .map()

let numArray = [];
let fizzBuzzArray = [0]

for (let i = 0; i < 101; i++)
{
    numArray.push(i)
}

numArray.map( x => {
    if (x % 15 === 0) fizzBuzzArray.push(x);
})

console.log(fizzBuzzArray)

/*
 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];


if(arr instanceof Array === true) {
    let revarr = arr.reverse()

    revarr.forEach((i) =>
    {
        console.log(i);
    })
}
else
{
    console.log("NOT AN ARRAY YOU LITTLE IDIOT!!!!!!!!!!!!!!!!")
}