/* ! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.

    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional


    Expressions and statements.

    Keyword name (expression)
    {
        Code block that executes a function.
    }
*/


/* 
    Comparion Operators.
    - JS is helful and does something called "Coercion" when comparing values.
        -Coercion is the process of converting one value type to another.

*/

//Equal to == 
//JS assumed that we wanted to check if 3 equals 3, this is checking values.
console.log("3" == 3); //true

// Strict equal to, ===
// checks to see if the two datatypes and values are equal.

console.log("3" === 3); //false
console.log(3 === 3); //false

//Not equal t, !=
//determines if something ISN't equal to each other.

//not equal to, !=
// only checks values, not datatypes.
console.log("3" != 3); //false
console.log(3 != 4); //true;

//Strict not equal to, !==
console.log(3 !== 3); //false
console.log("3" !== 3); //true

// greater than
4>3;

//less than
3<4;

//Greater than equal to >=;
console.log( 3>= 2); // true;
//Less than equal to <=;

console.log( 3 <= 2); // true;




// And, &&, allows to add multiple conditionals.

console.log( 3 > 2 && 2 < 3); // true;

// Or, || Returns true if either conditional is fulfilled.

console.log(4>2 || 3<2); //true;

/* 
    Logical Operators
    - Arithmetic operators.
*/

// addition/subtraction operator
let r = 4
r += 1; //adds 1 to the current value. Such as r = r + 1;
r -= 1;
console.log(r); // 4
e *= 1;
e /= 1;

// remainder operator (modulus, good for showing if a number is even.)
r %= 2;

//exponential operator;
r ** 1;