// we import path and fs modules
const path = require('path');
const fs = require('fs');

// we import router function of express for pathing
const router = require('express').Router();


// gotta import our javascript functions!
const { currentNotes, addNote } = require('../../lib/notes');


// we import uuid module to create unique ids for each note
const {v4: uuid } = require('uuid');


////////////////////////////////////////////////


// we create a get request for /notes endpoint
router.get ('/notes', function (req, res) {
    
    console.log('get request sent for /notes endpoint');

    // place our function in a variable
    const notes = currentNotes();

    res.json({
        message: "success!",
        // retrieve variable in body of json object
        body: notes
    })

});


// we create post request for /notes endpoint
// remember to use "key" : "value" syntax in Insomnia for testing
router.post ('/notes', function(req, res) {

    console.log('post request sent for /notes endpoint');

    // we want to send data, so we should use our addNote() function
    // but what are we sending? an object with data
    // let's define that object
    // and remember that the body is req.body
    const newNote = req.body;
    
    addNote(newNote);
  
    res.json({
        message: "success!",
        // send our response in body
        body: newNote
    })

});


// we create delete request based on note id with endpoint:
// /notes/:id
router.delete('/notes/:id', function(req, res) {

    console.log('delete request');

    res.json({

        message: "success!"
    
    })

});


// use this for testing routes http://localhost:3001/api/notes
// remember we have to link these routes to the server.js file!
// we must export this file so we can use it
module.exports = router;