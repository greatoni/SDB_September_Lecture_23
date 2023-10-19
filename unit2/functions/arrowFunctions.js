/* 
    (1)         (2)
    let hi = () => {
        console.log('hi');
    }

    1. we need to set the fat arrow function to be a variable.
    2.We use the "Fat Arrow" to signify that it's indeed a function.

    - arrow functions were introduced in ES6. They are a more basic way of writing function expressions but aren't declarations.
        - Does not get hoisted.
*/

// ! Concise Body
let hi = () => console.log('Hi');


// ! Block Body

let hiyah = () => {
    console.log('hi');
}

console.log(hiyah());



let apples1 = (x) => `There are ${x} apples.`;

let apples2 = (x) => {
    return `There are ${x} apples`;
}

console.log(apples1(4))
console.log(apples2(20))

let apples3 = x => `There are ${x} apples.`

let apple4 = (x,y) => `There are ${x+y} apples.`


/* 
    let hi = () => {
        (1)
        return 'hi';
    }

        (2)       (3)
    let newName = hi();

    console.log(newName)

    1. return is the keyword that brings our data out of a function.

    2. We need a new variable that holds the value of the return.

    3. the function call, the new variable is now the function's return value.

*/

let firstname = fName => 'steve';
let myName = firstname();
console.log(myName);

function capitalizeName(name) {
    let capName = '';

    for (char in name)
    {
        if (char == 0)
        {
            capName += name[char].toUpperCase();
        }
        else
        {
            capName += name[char].toLowerCase();
        }
    }

    return capName;
}

const newName = capitalizeName('dewin');
console.log(newName);

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable (console log)
*/

function tipCalculator(total, percentage)
{
    let adjustedPercentage = percentage *0.01

    let tip = total * adjustedPercentage;
    let trueTip = tip.toFixed(2)
    return trueTip;
}

function totalMealCalculator(mealCost, percentage)
{
    let tip = tipCalculator(mealCost, percentage)
    let totalMeal = mealCost + tip;
    let trueTotalMeal = totalMeal.toFixed(2)
    return `The meal cost ${mealCost} with a tip rate of ${percentage}% for ${tip}. The total cost is ${trueTotalMeal}. The change is equal to ${100 - totalMeal}.`
}

let myMeal = 50
let suggestedGratuity = 26

let tip = totalMealCalculator(myMeal, suggestedGratuity);

console.log(tip);