const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen (port, () => {
    console.log('App listening on port http://localhost:3000');
});

app.get('/books', (req, res) => {
   
});