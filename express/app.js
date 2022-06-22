const express = require('express');

const path = require('path')

const app = express()


const port = 3000;

console.log(__dirname);
// for serving satic files
app.use('/static', express.static(__dirname + '/static'));

// set thte template engine as pug
app.set("view engine", "pug");

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get('/', (req, res)=>{
    res.status(200).render("demo", { title: "Hey Ayush", message: "Hello there! Thanks for teaching about pug" });
});

app.get('/about', (req, res)=>{
    res.send(`This is my about page `)
})

app.get('/contacts', (req,res)=>{
    res.status(400).send('not responded')
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})