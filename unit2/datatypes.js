// Datatypes

/* 
    Boolean = True / False = only two values.
*/

let on = true;
let off = false;

console.log(on, off);

/* 
    Null = an empty value;
*/
let abyss = null;

console.log(abyss);

/* 
    Undefined = no value is assigned, does not act like an empty container. 
*/
let potential;

/*     
    Integer = Whole numbers, such as 1, 42, and 655. 
    Float = Decimal numbers that can also be whole numbers.
*/
let gemini = 2;
let arcana = 22;
let pie = 3.141592653;

//Javascript will only allow fifteen digits before it rounds up.
//In math, Javascript may round out when using decimals on it's own, using math with decimals would require something like this.

let Ihatenumbers = (0.2 * 10 + 0.1 * 10)/10; //Javascript sorts out PEMDAS for me.
console.log(Ihatenumbers);

/* 
    String = a collection of characters, arranged into words and/or sentences.
    can be used with double quotes or single quotes.
*/

let fear = "hunger";
let abcdefghijklmnopqrstuvwxyz = "The quick brown fox jumps over the lazy dog."
let onequote = 'Single Quotes'

//quick cool thing;
let a = Number("45"); //Turns string of numbers into numbers;
console.log(a);


let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the varaible.
console.log(undef); // undefined

let correct; // write like this instead
console.log(correct); // undefined
Numbers:

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

/* Numbers vs strings */
let number = 1234+5555; // adds number values as expected.
let ourwords = '1234'+'5555'; //Appends values to the end.

console.log(typeof number); //typeof returns the kind of variable used.
console.log(typeof ourwords);

console.log(ourwords[2]) // = 3, can access string characters within a string.


/* 
    OBJECTS are used to store many values rather than a single value.
    Need to be denoted(defined by) with curly brackets {}.
    Inside the object we use key value pairs.
        Key: Value, <-- Key value pairs need to be separated via comma. 
*/

let frodo = {
race: "Halfling",
altName: "The protagonist",
rings: 1,
cloak: true,

}

console.log(frodo);  //returns all aspects of the object.
console.log(typeof frodo); ///returns object.
console.log(frodo.altName); //Returns only the part that is requested from the log.

/* 
    Arrays:
    - Arrays are containers that hold list(s) of items.
    - They are denoted using the [] keys.
    - An array with multiple items needs those items to be comma separated.
*/

let list = [1,2,3,4]

/* 
    1. array name/list. Just like other variables an array must be defined.
    2. Array is inside of the square brackets.
    3. Each item regardless of datatype, are comma separated.
*/

let otherlist = ["Word", 1, false]; //JS defines objects as a container that can hold multiple datatypes, 
//Arrays can also hold multiple datatypes and are considered a type of object.

console.log(burritos[0]); //Returns the first item in the array.


/* 
    DataType Literals:
    - A literal represents a fixed value that we as developers insert into the code.

    - Literals Include:
        - string literals(character wrapped in quotations)
        - numeric literals (integers)
        - boolean literals (true/false)
        - object literals (key/value pairs)
        - array literals (lists)
*/

// STRING LITERAL
let car = 'Ford';

// NUMERIC LITERAL
let december = 12;

// BOOLEAN LITERAL
let tired = true;
//A value of truth or false

// OBJECT LITERAL
let soups = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
};
// objects hold what are known as key/value pairs. Our soup object has 3 keys (a, b, c), and each of those keys have their own value tied to it

console.log(soup.c); //beef and barley
/*
    - objects use something called dot notation. Dot notation allows us to dig through an object and grab specific data
    - above we are calling our 'soup' variable and using dot notation to grab the key 'c' that's inside our object. Doing so will return the value associated with the key of 'c' (beef and barley)
*/

// ARRAY LITERAL
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

console.log(days.toString()); //Monday, Tuesday, Wednesday, Thursday, Friday
//this is a method that comes built into javascript to help us separate an array into strings

console.log(days.length);
/* this is a property of arrays. Properties are things that already belong to an object