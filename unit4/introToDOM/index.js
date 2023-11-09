/*
!DOM

    -Document only model
    - Only through the browser

    Frame:
        -Document: HTML page (in the browser)
            -"Document" - Is a global variable
        -Object: Elements and comments (nodes)
        -Model: Arrangement of elements

    -Data representation of objects that comprise the structure and content of a document on the web.

* Bom
    - Browser Object Model
    - "Window" - global variable
    - Various methods available!!!

*/

function askForStuff() {
    prompt()
}

//askForStuff();

console.log(document)
console.log(document.URL)
console.log(document.location) // same as URL!!
console.log(document.title)
document.title = "DOM IT!!!";

//! CREATING OUR FIRST ELEMENT!!!!!!!!!!!!!!

let h1 = document.createElement('h1');
console.log(h1);

/* 
    OUR VARIABLE NOW HAS ACCESS TO VARIOUS PROPERTIES!!!!!
        -innerHTML: can inject a block of html
        - innerText: returns the visible text contained within a node.
        - textContent: return the full text;


        ex:
            <p> HELLO <b>World</b></p>
            `Innertext would return "HELLO"
            `TextContent would return "HELLO World"
*/

h1.innerText = 'Creating my first DOM ELEMENT!'

/* 
* Chain of events
    1. Create the element
    2. Apply the values
    3. Place the element
*/

//console.log(document.body)
document.body.appendChild(h1);

h1.style.color = "blue";
h1.style.textAlign = 'center';

let color = 'red';

h1.style = `
    text-shadow: 2px 2px 2px yellow;
    color: ${color};
    text-align: center;
`

h1.className = "h1-class-name"
//JS requires camelCasing as "className" instead of "class" due to it being a keyword
h1.id = 'set-id'

/* 
! Finding Elements

* HTMLCollection
        - An array-like object
        - Allows access to index, properties, and methods help navigate and modify.
        - Does Not allow to modify a group of elements all at once.
        - Can loop through it.
        - Can use .length property to get the size of the list.

    Accessing Multiple Elements requires these methods:
        - getElementsByTagName()
        - querySelectorAll()
        - getElementsByClassName()
*/

let li = document.getElementsByTagName('li')

for (i of li)
{
    i.style.color = "green"
}

let bathroom = li[0];
bathroom.style.color = 'red';

/* 
*   .querySelector()
        - Grabs first instance of an element or null if nothing found.
        - Can target by ID, Class, or Element
            - will need to append # for ID
            - will need to append . for Class
*/

let firstLi = document.querySelector('li');

let toDoList = document.querySelector('#listTitle');

toDoList.style.textAlign = 'center'

/* 
*   .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
*/

let nodeListLi = document.querySelectorAll('li')
console.log(nodeListLi);

let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo')

newListItem.innerText = "listItemX";
ul.append(newListItem);
ul.appendChild(newListItem)

let liClass = document.getElementsByClassName('listItem')
//console.log(liClass);

// ! Event Listeners!

/* 
    Allows us to execute a function when an event occurs.

    .addEventListener()
        - DOM node method
        - requires an event to "listen for" or type and a callback function.

    ex:
    node.addEventListener('click', ()=> {})

    Adding an item to the list:
        step
            - Capture the input
            - Access the parent element
            - Create a new element(li)
            - assign the value to attributes
                -"Text from input"
                - Append to parent parent.
*/

let btn = document.getElementById('submit');
let input = document.getElementById('listInput');

//btn.addEventListener(('click'), e => {
//    console.log("This button has been clicked!");
//})

btn.addEventListener('click', addItem)

function addItem() {
    //console.log(input.value)

    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style = `
        color:blue;
    `

    ul.appendChild(newItem);
}