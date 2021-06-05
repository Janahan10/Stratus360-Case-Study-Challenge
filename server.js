/*
import { createServer } from 'http';
import { readFileSync } from 'fs';
var index = readFileSync('index.html');

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(9615);
*/
/*
const http = require('http')
var url = require('url')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).path
    console.log(queryObject)

    res.writeHead(200, {'content-type': 'text/html'})
    res.write('hi')
    res.end()
})
server.listen(port)
*/

const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    axios.get('http://xkcd.com/251/info.0.json')
    .then(response => {
    console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
})

app.get('/:comicNo', function(req, res) {
    const comicId = req.params.comicNo
    let body = ''
    
    axios.get('http://xkcd.com/' + req.params.comicNo + '/info.0.json')
    .then(response => {
    res.render('pages/index', response.data)
    console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })

    
})

app.listen(port)
console.log('running...')



    
