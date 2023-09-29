/* 
    Ternary Conditional Statement
    - Super cool syntax B)
    - A shortcut for writing if/else or else/if, or even just if.

*/

let num = 6;

//Ternary:

(num > 0) ? console.log("YES") : console.log("NO");

// Instead of:

if(num > 0)
{
    console.log("Yes");
}
else
{
    console.log("NO");
}


// Ternary with two conditionals;

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
} 

//Ternary
(x == 0) ? console.log("Hello") : (x < 1) ? console.log("HI") : console.log("Goodbye");

//Ternary V2
(x == 0) ? console.log("Hello") 
    : (x < 1) ? console.log("HI") 
    : console.log("Goodbye");

//Requires a "Default" item or else it will throw an error.