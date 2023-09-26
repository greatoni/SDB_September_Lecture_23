// Single line commen: control+/
/*
Multi-line comment:
Shift+alt+a
*/

// Variables:

/* 
    WE can create a variable through 3 different keywords.
    1. var
    2. let
    3, const
    4. (No keyword)

*/

let a = 2;

//  1,      2,   3,   4
    let     b    =    1;

/* 
    1. use JS keyword to denote the creation of a variable.
    2. What the developer refers to or calls upon in order to get the stored value. Variable names should be to the point / pertain to the data.
        -should be camelCase.
    3. Assignment operator: equal sign, =
    4. The initial variable value, it's starting data value.
        -Int (1, 2, 3, 4, 5, etc)
        -bool(true/false)
        -string('Prospero Chalaise', "Fear", "Apple")
        -null

*/

// *Declaration vs initialization.

//Declaration
let x;
console.log("Declaration of X = ", x);

let apple;
let alafdshpigpngspng;

//Initialization;
let y = 4;
let fear = "hunger";

//reassign variables;

x = 5;

console.log("Initialization 1: ", x);

x = 25;

console.log("Initialization 2: ", x);


// *Assigning to Other Variables / create variables from variables!

let firstName = "Elijah";   
let lastName = "Wakeling";

let fullname = firstName + " " + lastName;

/* 
    Console

    a place to see text output and code results.
    There is a console in your browser.
    There is also a console in VSCODE.


    .log(), this is the log mmethod of the console, log will print whatever it is passed.
*/

console.log(fullname);

console.log(x+x);


// Use multiple variables in a console log.

let today = "great!";
const tomorrow = "SO MUCH FUNN!!!";

console.log(today, tomorrow);

today = "Dismal";
//tomorrow = "Bloody AWFUL!"; //TypeError: Assignment to constant variable.