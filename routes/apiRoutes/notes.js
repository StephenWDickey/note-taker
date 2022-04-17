// we import path and fs modules
const path = require('path');
const fs = require('fs');

// we import router function of express for pathing
const router = require('express').Router();

// we import uuid module to create unique ids for each note
const uuid = require('uuid');


////////////////////////////////////////////////


// we create a get request for /notes endpoint
router.get("/notes", function(req, res) {

    console.log(`get request sent for /notes endpoint`);

    fs.readFile("./db/db.json", function (err, data) {

        if (err) {
            throw (err);
        };
        
        // need to parse data after readfile
        let notes = JSON.parse(data)

        return res.json(notes);

        
    })

    console.log(`note data retrieved`);

    
    

});


// we create post request for /notes endpoint
// remember to use "key" : "value" syntax in Insomnia for testing
router.post ('/notes', function(req, res) {

    console.log('post request sent for /notes endpoint');

    let newNote = req.body;

    newNote.id = uuid();

    // we read notes file and take data, push new note to data
    fs.readFile("./db/db.json", "utf8", function(err, data) {

        // when we readfile it becomes string, so we have to parse
        let currentNotes = (JSON.parse(data));

        currentNotes.push(newNote);
        

        // now we add new set of notes to database, but stringify it first
        fs.writeFile("./db/db.json", JSON.stringify(currentNotes), "utf8", function(err){
            console.log("post request sent for /notes endpoint")
        })
    })

    res.json(newNote);

});


// we create delete request based on note id with endpoint:
// /notes/:id
// Deletes notes - removes from db.json and re-writes to db.json
router.delete("/api/notes/:id", function(req, res) {

    // we use req.params and add id parameter
    const id = req.params.id

    fs.readFile("./db/db.json",  function(err, data) {

        if (err) {

            res.status(400).json({ error: err.message });
            return;
        }

        const oldData = JSON.parse(data)

        const newData = oldData.filter(item => {
            if(id !== item.id){
                return item
            }
        })

        // we rewrite note data with new data
        fs.writeFile("./db/db.json", JSON.stringify(newData), "utf8", function(err) {
            if (err) {
                throw (err); 
            }
            console.log("note deleted.");
            
        })
    })

});


// use this for testing routes http://localhost:3001/api/notes
// remember we have to link these routes to the server.js file!
// we must export this file so we can use it
module.exports = router;