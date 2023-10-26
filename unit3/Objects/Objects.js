// ! Objects

let charSheet = {
    fullName: "Vincent Allbright",
    class: "Lord",
    lvl: 1,
    active: true
}

/* 
* Object Literal
    When our values are written within our keys
        -hard coded

* Structure

    keyword objectname = {
        key: value,
    }

* Objects as dictionaries    
*/

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

console.log(theSimpsons.genre); //dot notation;
console.log(theSimpsons['genre']); //square bracket notation

console.log(theSimpsons.seasons["Season one"]);

theSimpsons.characters = ['homer, marge, bart, lisa, maggie']
console.log(theSimpsons);

/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/

theSimpsons.characters.push('ned');
console.log(theSimpsons.characters)

/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/

let prevDate = theSimpsons.seasons["Season one"][1].aired;
theSimpsons.seasons["Season one"][1].aired = "1990-01-14";


/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    movies : [
    {
        id: 1,
        moviename: "Santana",
        rating: "PG",
        runtime: 120,
        year: 2002
    },
    {
        id: 2,
        moviename: "Santiago",
        rating: "PG",
        runtime: 120,
        year: 2003
    }
    ],
    shows : [
        {
        showName: "America's FUNNISET HOME VIDEOS!",
        rating: "TVPG",
        runtime: 60,

        seasons: {
            "Season One":[
                {
                    episodeName: "Fear is the mind killer!",
                    episodeDate: "02/31/2022"
                },
                {
                    episodeName: "No fear but fear itself!",
                    episodeDate: "03/31/2022"
                }
            ],

            "Season Two":[
                {
                    episodeName: "Tom Burgeron has died of ligma!",
                    episodeDate: "02/31/2023"
                },
                {
                    episodeName: "Bob Saget has died of ligma!",
                    episodeDate: "03/31/2023"
                }
            ]
        }

        }
    ]
}

console.log(hulu.movies);
console.log(hulu.shows[0].showName);
console.log(hulu.shows[0].seasons["Season Two"][0].episodeName)