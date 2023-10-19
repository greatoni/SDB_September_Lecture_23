// ! PARAMETERS AND ARGUEMENTS
// Parameters can be named whatever you wish, just try to have it make sense to the function.

function greeting(name) {
    console.log(`HI, ${name}.`)
}

greeting("Elijah");

function fourWordSentance(first, second, third, forth)
{
    console.log(first+" "+second+" "+third+" "+forth+".")
}

fourWordSentance("I", "Like", "BEEF", "TALLOW");
fourWordSentance("I", "HATE", "CROW", "JERKY");


/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function fullName(first, last)
{
    let fullName = first + " " + last;

    console.log("HELLO "+fullName+".");
}

fullName("Klein", "Bauman")

function check(myint) {
    if (myint === 2)
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }
}

check(2);