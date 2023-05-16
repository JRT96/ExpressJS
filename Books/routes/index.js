const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render("index")
});


router.get('/add', (req, res) => {
    res.render('addbooks');
});

router.get('/books', (req, res) => {
    res.render('books');
});



module.exports = router;