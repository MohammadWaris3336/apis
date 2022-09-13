const express = require('express');
const app = express();

 
const books = [
{title: 'Harry Potter', id: 1, education:'Bscs'},
{title: 'Twilight', id: 2, education:'BBA'},
{title: 'Lorien Legacies', id: 3, education:'MBA'}
]
 
//READ Request Handlers
app.get('/', (req, res) => {
res.send('get post update Delete');
});
 
app.get('/api/books', (req,res)=> {
res.send(books);
});
 
app.get('/api/books/:id', (req, res) => {
const book = books.find(c => c.id === parseInt(req.params.id));
 
res.send(book);
});
 
//CREATE Request Handler
app.post('/api/books', (req, res)=> {
const book = {
id: books.length + 1,
title: 'Ammar',
education: 'Amazon'
};
books.push(book);
res.send(book);
});
 
//UPDATE Request Handler
app.put('/api/books/:id', (req, res) => {
const book = books.find(c=> c.id === parseInt(req.params.id));
 
book.title = 'new';
book.education= "MS";
res.send(book);
});
 
//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {
 
const book = books.find( c=> c.id === parseInt(req.params.id));
 
const index = books.indexOf(book);
books.splice(index,1);
 
res.send(book);
});
 

app.listen(3305);