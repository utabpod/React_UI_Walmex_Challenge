## Technology used
- React, redux
- For bundling, Webpack
- In server side Node js
- Middleware Redux-Thunk


## Server side changes:
- In the server side Node js layer added static file to start from public. which run the index.html file
- In the routes for getUserHandler added the exception handler which help to avoid the crash of API
- In the routes for getListOfAgesOfUsersWithHandler added exception handler and params name lookup
- In the db for getListOfAgesOfUsersWith added the functionality which will provide the array of age and count object.


## Frontend changes
- To consume the API, Created UI in React js technology. To maintain the state, use redux as state management. Handling dispatch used redux-thunk as middleware

## Steps to start the application
. Package installation
` npm install`
To start the application
`npm start`
which run the server as well as react application and run on port 3000