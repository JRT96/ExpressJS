const express = require('express');
const app = express();
const port = 3000;

const booksRouter = require('./routes/books');
const addRouter = require('./routes/addbooks');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
});

app.use('/addBooks', addRouter)
app.use('/books', booksRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));