/* 
! FUNCTIONS

    - Block of code that performs a particular task.
    - Simplified programs which run a task when invoked.
*/


/* 
! Function Declaration

    function hi() {

        console.log('Hi')
    }

    1: Keyword (Function)
    2: Function Name (hi())
        - Parenthesis allows for information to be plugged into the function.

*/

function hi() 
{
    console.log("HELLO WORLD!");
}


/* 
! Function Expression

    let hey = function hi() {
        console.log('HI');
    }

    1. The variable "hey" is now the representative of the function "hi". 
*/

let hey = function hello() {
    console.log("HI AGAIN!");
}

/* 
! INVOKING FUNCTIONS!

1.
hi();

This is how we invoke our function, calling it by the name it has been given, followed by parentheses.
*/

function greetings() {
    console.log('hello');
}

greetings;
greetings();
console.log(greetings);

// Create a function that when invoke lists out the numbers 1-10

function counting() {
    for (i = 1; i < 11; i++)
    {
        console.log(i);
    }
}

counting();


let arr = ['This','is','really','cool'];

let arrList = function arrList() {
    for (word in arr)
    {
        console.log(arr[word])
    }
}

arrList();

let dogArray = [
    "Kabosu",
    "Caesar",
    "Mishka",
    "Laika",
    "Maxwell",
    "Tofu",
    "Kevin",
    "Apollo",
]

function callDogs() {
    console.log(dogArray);
    for(dog in dogArray) {
        console.log(dogArray[dog]);
        console.log(`Our ${dogArray[dog]} is in spot ${dog}.`);
    }
}

callDogs();

let num1 = 1;
let num2 = 2;

function addTwoNumbers(one, two){
    let sum = one + two;
    console.log(sum);
    return sum;
}

let sumoftwo = 0;

addTwoNumbers(sumoftwo, num2);