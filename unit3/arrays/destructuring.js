/* 
    -Syntax is on the left side of the assignment operator
    -Great for pulling info out of an array and putting it into it's own variable.
*/

const fullName = ['Elijah','Wakeling'];

const fName = fullName[0];
const lName = fullName[1];

const [firstName, lastName] = fullName;
console.log(firstName, lastName);

console.log(`Hello Mr. ${lastName}.`)


let obj = {
    first: 'Elijah',
    last: 'Wakeling'
}

const {first, last} = obj;

let database =[{},{},{}];

let myObj = {
    last
}

database.push(myObj)


// ! Spread
/* 
    -Denoted by three consecutive periods: ...
    - Pulls out all array elements and gives them as a standalone list of elements


    */

const myfullName = [...fullName];
console.log(myfullName);

fullName.push('Mr.');
console.log(fullName, myfullName);

const prices = [10,4,2,3,5,6]
console.log(Math.min(...prices))

// ! REST
const fullname2 = [
    'jane','dow','ms', {Month: 3, Date: 22, Year: 1973}
]

const [fiName, laName, ...otherInfo] = fullname2;

console.log(fName);
console.log(lName);
console.log(otherInfo);

//rest structures can be used to only capture parts of a dataset!
const [,,,birthday] = fullname2;