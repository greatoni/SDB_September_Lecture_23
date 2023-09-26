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
*/

let fear = "hunger";
let abcdefghijklmnopqrstuvwxyz = "The quick brown fox jumps over the lazy dog."


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