// we need to use the router() function of express in order to:
// join our html files to our endpoints!
// path is a core module in node
const path = require('path');
const router = require('express').Router();

/* remember res.sendFile syntax!

    res.sendFile(path.join(__dirname, '../dir/dir2/filename'))

    path is module in node, join() method will join sequence 
    of path segments

    __dirname returns directory that the script is running in

    without using path.join you can use the following syntax:

    res.sendFile('dir/filename)' , { root: __dirname });

*/


// get request for '/' endpoint to send front end index file
router.get('/', function (req, res) {
    console.log ('get request sent for index.html');
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});


router.get('/notes', function (req, res) {
    console.log ('get request sent for notes.html');
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});



// remember to link to our server.js file!
module.exports = router;