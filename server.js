// import the express module
const express = require('express');

// we define our PORT as a variable one for heroku or our local one 3001
const PORT = process.env.PORT || 3001;

// we put express function in a variable so we can chain methods to it!
const app = express();

// we create expressions for middleware
// this one tells us we may receive arrays within arrays
app.use(express.urlencoded({extended: true}));
// this one will parse json data and put it in req.body object
app.use(express.json());
app.use(express.static('public'));




// this will start our express erver at the specified port
app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`)
    
});