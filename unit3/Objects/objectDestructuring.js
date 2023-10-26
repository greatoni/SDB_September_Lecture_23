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
    characters: ['homer', 'marge', 'bart', 'lisa', 'maggie'],

    currentlyRunning: true,

}


const {characters, seasons} = theSimpsons;

console.log(characters)
characters.push("Meo");
console.log(theSimpsons);
characters[5]= 'Moe';

const {currently_running: on_air} = theSimpsons;
console.log(on_air);

//! Spread with objects!
const simsponsCharacter = {
    house: ['homer', 'marge', 'bart', 'lisa', 'maggie'],
    tavern: ['Moe','barney']
}

const generalLocations = {
    park: 'statue',
    beach: 'dock'

}

const locations = {
    ...simsponsCharacter,
    dmv: ['patty','selma'],
    ...generalLocations
}