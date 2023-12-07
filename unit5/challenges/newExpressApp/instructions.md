## Challenge
- Create an `express application` called **Express Challenge**
  - The entry point file will be `index` (not `app`).
  - Create a `gitignore` file and apply the necessary file or folders within it.
- Set this application to accept `JSON`.
- This will run on a port of your choosing.
- Create a middleware function
  - This should be within it's own file and imported.
  - The function will need to capture the current time as a **timestamp**.
    - Consider: [W3 Schools](https://www.w3schools.com/jsref/jsref_obj_date.asp).
    - Will need to store in the `req` a `timestamp` key that holds a value of HH:MM.
- Create a `data.json` file and inject the following:
- Create 4 different Routes:
  - GET
    - All items from `data.json`
    - This will have an empty endpoint.
  - GET
    - One by ID using params
  - GET
    - One by Title using query
  - POST
    - Accept a JSON that includes **title** and **author**.
    - This will NOT need to update the `data.json` file.
  - ALL routes requires to have a timestamp sent back with the response.
  - Consider if data is passed that doesn't exist in `data.json` a message to process within a new Error.
    - ex:
  ```js
  throw new Error('error message to send');
  ```

- Test each route within **POSTMAN**
  - There should be 4 different requests made

  