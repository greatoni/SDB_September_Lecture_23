/* 
! Async/Await
    - Introduced in ES8 in 2017
    - Can make any function an async function by denoting as such
*   Keywords
        - async
            -denotes a function
        await
            -calls a process to 'wait' for a result
*/

// Some syntax
async function asyncFunctionDeclaration() {
    // codeblock...
}

let funcExpression = async function() {
    // codeblock...
}

let arrowFunc = async() => {
    // codeblock...
}

async function getName() {
    return "Gandalf"
}

getName().then(data => console.log(data));

// !AWAIT - Tell JS that a promise is being returned and to wait on the result.

async function extraData() {
    let info = await returnData();
    return( `${info} in some cloud... `)
}

extraData().then(data => console.log(data))