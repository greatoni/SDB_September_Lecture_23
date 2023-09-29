/* 
    Switch Statements
    - A switch statement executes/runs a block of code depending on different cases.
    - Switches are used with breaks and defaults.
        -While optional, these are nice to use.
        -Breaks end switch statements prematurely. If not added the next case will run.
        -Defaults allow a fallback for if no conditions are applied.
    -More efficient than else-ifs, keeps your code from looking like yandere-dev's.
*/

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter} but do I know you?`);
    }

//We can use backticks. `` to create strings that can use the value of variables surrounded by ${};

let num = -40;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
}