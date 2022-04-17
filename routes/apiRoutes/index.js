// import router() function from express
const router = require('express').Router();


// we need to route from our index page to our notes page!
router.use(require('./notes'));


// we export this function
module.exports = router;