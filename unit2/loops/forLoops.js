/* 

Loops loop through a block of code a number of times that we control! 

!IF STUCK IN AN INFINITE LOOP:
    ctrl+c, ctrl+z, red stop button "Code Runner"


    ? For loops
        Take in three parameters (x = 1, X > 2, X++)
            -Initial expression (X=1)
            -Conditional (X>2)
            - INcrement (X++)

    Structure
    for (initial expression ; condition ; increment expression)
*/


    for (x = 10; x >= 0; x--)
    {
        console.log(x);
    }

    console.log("Finish loop!")


    for (i = 5; i >=0; i--) console.log(1);

    //  Spell out a word letter for letter.
    let thename = "Anatoli";

    for (i = 0; i < thename.length; i++)
    {
        console.log(thename[i])
    }

    // change the value of a variable with a for loop.

    let sum = 0;

    console.log(`Sum equals ${sum} before the loop`)

    for (let i = 0; i < 5; i++)
    {
        sum += i;
    }

    console.log(sum);


    /* 
    ? For In Loops

    -Loop through the properties of an object.

    Structure:
    for (key in object) {
        ...code to run
    }

    ^key is a random variable name of your choice.
    */

    let student = {
        myname: "Steadwick",
        animal: "Stag",
        degree: "Magic",
        Age: 23,
    }

    console.log(student.myname);
    console.log(student["myname"]);

    for( item in student)
    {
        console.log(item);
        console.log(student[item]);
    }

    let catarray = [

        "Maxwell",
        "Uni",
        "Michael",
        "D",

    ]

    for (cat in catarray)
    {
        console.log(cat);
        console.log(catarray[cat])
    }

    /* 
        For in loops can be used on both objects AND arrays.
        But if array index order is important: it's better to use a 
        -for loop,
        -for of loop,
        -Array.forEach(),
    */

    /*
        ?For of Loops:

        - Loops through the values of an iterable object.
            Iterable- an object that has iterable properties.(stuff that can be counted/went through);

        Structure:
        for ( variable of iterableData){
            ...code
        }

        Can loop through arrays, strings, etc.
    */

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

    for (puppy of dogArray){
        console.log(puppy);
    }

    for (dog of dogArray){
        if (dog === "Apollo")
        {
            console.log("LONG BOI!!!!!!!!")
        }
        else if (dog === "Kabosu" || dog === "Caesar")
        {
            console.log("DOGE!!!!!!!!")
        }
        else 
        {
            console.log("ADORABLE!");
        }
    }