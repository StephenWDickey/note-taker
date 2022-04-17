// import file system for pathing
const fs = require('fs');


// we create a function to get the notes already on our page
function currentNotes() {
    
    /* we use the readFile() method of the fs module
    this method reads a file and returns its content
    the syntax is as follows:

        fs.readFile( path, options, callbackFunction (err, data) )

        path is the path of the file

        options is an object {encoding: 'utf8', flag:'r'} that specifies
        the encoding and flag

        not entirely sure what flag means but r is default, apparently means:
        open file for reading
            r - open file for reading
            r+ - open file for reading and writing
            rs - open file for reading in synchronous mode
            rs+ - open file for reading and writing in synchronous mode
            w - open file for writing
            wx - like w but fails if path exists
            w+ - open file for reading and writing, creates file if doesnt exist
            a - open file for appending, creates file if does not exist
            ax - like a but fails if path exists
            a+ - open file for reading and appending, file created if does not exist
            ax+ - like a+ but fails if path exists
    
    we are going to read our db.json file and return the data so we can 
    work with it! */

    const noteData = fs.readFile('./db/db.json', {encoding: 'utf8', flag: 'r'}, (err, data) => {

        if (err) {
            console.log(err);
        }

        else {
            console.log("Retrieved current notes!");
            // note: data returned by readFile returns as string data
            // we parse the data that has been returned by readFileSync
            const currentNotes = JSON.parse(data);
            console.log(currentNotes);
            return currentNotes;
        }

    });

};


/////////////////////////////////////////////////////////////



// we need to be able to add Notes too per the mockup
// we make parameter called note
function addNote(note) {
    
    // we'll get the data of our current notes 
    fs.readFile('./db/db.json', 'utf8', function(err, data) {

        // parse it because it's a string
        let currentNotes = JSON.parse(data);

        // we push the new note to the old notes
        currentNotes.push(note);

        /* here we are going to use the fs.writeFile() method, 
        this method writes data to the specified file and replaces it if it already exists!

        the syntax is as follows:

            fs.writeFile(file, data, callbackFunction (err, data))

            file is the file

            data is whatever data we want to add, in our case
            it is the notes variable above, it needs to be stringified first however

                JSON.stringify(value, replacer, spacing)

                value is our notes data

                replacer would be specifying if we want only 
                particular data, but we want it all so put 'null'

                spacing allows us to add white spaces into string!*/
        
        // we now add to our db.json file with new note
        fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (err) => {
            console.log(currentNotes);
        })
    });
    
    
 

  

};



/////////////////////////////////////////////////////////////////


// *** Don't forget to export!
// and we add to apiRoutes file
module.exports = {
    currentNotes,
    addNote
};