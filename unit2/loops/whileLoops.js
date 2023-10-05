/* 
    ?While Loops

    -Loops through a block of code WHILE a specific condition is true.


    structure
    while(Condition){
        ...code that runs/executes.
    }

    - the main purpose for while loops are when the iteration is unceratin.
        -aka we don't know how much content is in the data we are referencing or looping through.
*/

let n = 1;

while (n < 10) {
    console.log(`n before addition, start of loop: ${n}`)
    n++;
    console.log("N is now "+ n +".")
}

console.log("Escaped while loop! Final Value "+n+".")

// Use a while loop to create and log a string.

let cartMSG = ``;
let itmCnt = 0;

while(itmCnt < 5)
{
    itmCnt++;
    cartMSG = `You now have ${itmCnt} items!`
    console.log(cartMSG);
}


let city = [
    "Building",
    "building",
    "House",
    "Tavern",
    "Slum",
    "Shady as Shit Alleyway",
    "Crack House",
    "Pent House",
    "Red Room"
]

let pos = 0;
structure = ''
console.log("HEY GUYS It's XX_UrbanExplorer69_XX out here exploring an abandoned city let's see what we find!")

while (structure != "Red Room")
{
    console.log("-------------------------");
    pos++;
    structure = city[pos];
    console.log("I see a "+structure+"!")
}
console.log("-------------------------");
console.log("The recording ends here, this was his last video...")

/* 
    ?Do While LOOP
    - Also loop through a block of code while a specified condition is true BUT...
        !Loop will run the code block ONCE. BEFORE CHECKING IF THE CONDITION IS TRUE AND WILL KEEP RUNNING IF AS LONG AS THE CONDITION STAYS TRUE!

    Structure
    do {
        Code to execute;
    } while (condition)

    -Works exactly like while loops EXCEPT it WILL run the code block at least once.
*/

    let num = 5;

    do {
        console.log("The number is "+num+".")
        num++;
    } while ( num < 10);

    console.log("Final Value = "+num+".")

    let val = 5;

    do {
        console.log("The number is "+val+".")
        val++;
    } while ( val > 7);

    console.log("Final Value = "+val+".")

    //Mock Switch a group of accounts from deactivated to active, using a boolean,


    //Declare and initialize an object called accounts.
    let accounts = {
        acct1: false,
        acct2: false,
        acct3: false,
        acct4: false,
        acct5: false,
    };

// Use square bracket notation with the object's property key to get the t/f value.
// Want a variable that starts with 1 that we can incriment.
let acctNum = 1;

do {
    console.log(
        `acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`);

        console.log('Activating............');
        accounts[`acct${acctNum}`] = true;

        //increment
        acctNum++;
} while (accounts[`acct${acctNum}`] == false)

console.log("All Accounts Activated!")
console.table(accounts);