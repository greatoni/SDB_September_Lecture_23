let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

/* 
    Variable Keywords:
        - const: Cannot be reassigned.
        - var: Scoped to the nearest function;
        - let: Scoped to the nearest enclosing block.
*/

// Var
var myVariable = 12;

function varTest() {
    var myVariable = 33;

    if(true) {
        var myVariable = 45;
        console.log(`Var - Within If: ${myVariable}`)
    }
    console.log(`Var - Within Function: ${myVariable}`)
}

varTest();
console.log(`Var - Within outside: ${myVariable}`)

// Let
let yourVariable = 12;

function varTest() {
    let yourVariable = 33;

    if(true) {
        let yourVariable = 45;
        console.log(`Let - Within If: ${yourVariable}`)
    }
    console.log(`Let - Within Function: ${yourVariable}`)
}

varTest();
console.log(`Let - Within outside: ${yourVariable}`)

// Tip: CTRL+D ~ multi-cursor;

// const

function constTest() {
    const scope = 1;

    if (true) {
        const scope = 2
        console.log(scope);
    }

    console.log(scope);
}

constTest()