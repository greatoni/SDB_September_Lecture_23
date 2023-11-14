/* 
!API
    -Application programming interface
    -Client (front end) to communicate with the server (database).
    -Allows HTTP requests and response lifecycles.
*/

/* 
! Fetch
    - Before fetch(), we would have to use an httpRequest through items like jQuery/Ajax
    - Is an API;
    - Is a method that requires one argument.
        -The location we are trying ot obtain data from (url)
    - Handles the request and response.
    - Returns a promise
        -Allows us access to resolvers (.then()/.catch())
*/
const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(testEndpoint)
    .then(res => console.log(res.body));

/* 
!   Json
        - Javascript Object Notation
            - very lightweight for storing and transferring data.
            - "easy to understand"

* Syntax
    {
        "key":"value",
        "key":true,
        "key":0

        - everything is wrapped in quotes except integers and booleans.
        - data is separated by a comma.
        - CANNOT hold comments
    }
*/

fetch(testEndpoint) // provides a promise
    .then(response => response.json()) // turns promise into a json
    .then(data => {
        console.log(data) //allows us to work with the object.
    })

function displayIt(info) {
    const body = document.querySelector('body')
    const p = document.createElement('p')

    p.textContent = info.body;

    body.appendChild(p);
}

// * Json.parse(string);
let myText = `{
"name": "Gollum",
"Lost_ring": true
}`
console.log(myText);
let parseJSON = JSON.parse(myText);
console.log(parseJSON.name);

const url = `https://meowfacts.herokuapp.com/`


/* function getCatFacts() {
    fetch(url)
        .then(res => res.json())
        .then(obj => {
            console.log(obj.data[0])
            displayIt(obj.data[0])
        })
}  */


/* 
!ERROR HANDLING
    Keywords:
        - try
        - catch

* Syntax
    try {
        ... code block to try
    }
    catch (err) {
        ...code block to respond to the error!
    }

*/
const getCatFacts = async() => {

    try {
    let res = await fetch(url);
    let results = await res.json();
    let data = results.data[0];
    displayIt(data);
    }
    catch(err){
        console.log(err);
    }
}

getCatFacts(); 


// * Local Fetch
fetch("./local.json")
    .then(res => res.json)
    .then(data => {
        let members = data.fellowship;
        console.log(members);

        for (m of members){
            display(m.name);
        }
    })
    .catch(err => console.error(err));
