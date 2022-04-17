// we import path and fs modules
const path = require('path');
const fs = require('fs');

// we import router function of express for pathing
const router = require('express').Router();

// we import uuid module to create unique ids for each note
const {v4: uuid } = require('uuid');


////////////////////////////////////////////////
// use this for testing routes http://localhost:3001/api/notes
// remember we have to link these routes to the server.js file!

// we create a get request for /notes endpoint
router.get ('/notes', function (req, res) {
    
    console.log('get request succesful');

    res.json({
        message: "success!"
    })

});


// we create post request for /notes endpoint
router.post ('/notes', function(req, res) {

    console.log('post request successful');

    res.json({
        message: "success!"
    })

});


// we create delete request based on note id with endpoint:
// /notes/:id
router.delete('/notes/:id', function(req, res) {

    console.log('delete request routed');

    res.json({

        message: "success!"
    
    })

});


// we must export this file so we can use it!
module.exports = router;