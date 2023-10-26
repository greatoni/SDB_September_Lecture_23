let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "Season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17'
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-1-01'
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */],
    },

    currentlyRunning: true,

}


// object.keys() - returns back an array of keys.
console.log(Object.keys(theSimpsons))

// Object.values() - returns an array of values.
console.log(Object.values(theSimpsons))
console.log(Object.values(theSimpsons.seasons))

// object.assign(); copies all enumerable properties from one or more sorces.
let objOne = {name1:"bo"}
let objTwo = {name2:"Ba"}
let newObject = assign(objOne, objTwo);

let futroma = object.assign(theSimpsons)

//delete
delete futroma.currentlyRunning;

// object.freeze
Object.freeze(theSimpsons)