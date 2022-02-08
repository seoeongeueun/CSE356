var express = require('express');
var path = require('path')
var app = express();

app.get('/', (req, res) => {
    res.redirect('/hw0.html')
})

app.get('/hw0.html', (req, res) => {
    res.sendFile('/root/hw1/hw0.html')
})

app.get('/photo1.jpeg', (req, res) => {
    res.sendFile('/root/hw1/photo1.jpeg')
})

app.listen(80)
module.exports = app;