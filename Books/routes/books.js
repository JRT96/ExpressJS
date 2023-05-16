const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const books = require('../data/books.json');

router.post('/', (req, res) => {
    const form = formidable(); //It creates a new IncomingForm object
    form.parse(req, function (err, fields, files) { //It parses the form data
        if (err) throw err;
        let rowData = { //It creates an object with the data to save in the DB
            title: fields.title,
            author: fields.author,
            description: fields.description,
            image: fs.readFileSync(files.image.filepath) //It reads the image
        };
        
        books.push(rowData); //It saves the data in the DB
        fs.writeFileSync('data/books.json', JSON.stringify(books)); //It saves the data in the DB
        res.end(); //It ends the request
    
    });
});



module.exports = router;