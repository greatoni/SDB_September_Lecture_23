
/* 
    Conditionals
    - A way for us as devs to ask a question nad tailor the code according to the response.
    - Devs == Inventors: we design and ask the question but also determine the answer options.
    - Conditions focus on a thing being true or false.
    - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number

    */

// IF Conditional Statements;

let isOn = true;

if(isOn == true)
{
    console.log("The light is on.")
}
else
{
    console.log("The light is off.")
}

if(isOn)
{
    console.log("Bools can be checked simply by calling the variable.")
}

if(!isOn)
{
    console.log("Not statements can be applied by placing an exclamation point before the statement.")
}


let temperature = 83;

if(temperature < 100)
{
    console.log("You'll be fine.")
}


let username = "myusername";
let password = "letmein1234";

if ( username == "myusername" && password == "Swordfish23410")
{
    console.log("Access Granted.")
}
else
{
    console.log("Access Denied.")
}

let person1isCool = true;
let person2isCool = false;

if( person1isCool && person2isCool)
{
    console.log("You are both cool, come in!")
}
else if (person1isCool || person2isCool)
{
    console.log("One of you is cool, nice to meet the new guy!")
}
else 
{
    console.log("Neither of you are cool, please go away.")
}