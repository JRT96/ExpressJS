const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const booksRouter = require('./routes/books');
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', "views");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use('/books', booksRouter)
app.use('/', indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));