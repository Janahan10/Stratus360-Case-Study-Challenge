const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3000

var comicNumber = 251
var visted = {}

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    comicNumber = 251
    axios.get('http://xkcd.com/251/info.0.json')
    .then(response => {
        console.log(comicNumber)
    if (251 in visted) {
        visted[251] += 1
    } else {
        visted[251] = 1
    }
    response.data["num_times"] = visted[251]
    console.log(response.data["num_times"])
    res.render('pages/index', response.data)
    // console.log(response.data)
    })
    .catch(error => {
        //console.log(error)
    })
})

app.get('/:comicNo', function(req, res) {
    comicId = req.params.comicNo
    comicNumber = req.params.comicNo
    axios.get('http://xkcd.com/' + comicId + '/info.0.json')
    .then(response => {
        console.log(comicNumber)
        if (comicId in visted) {
            visted[comicNumber] += 1
        } else {
            visted[comicNumber] = 1
        }
    
        response.data["num_times"] = visted[comicNumber]
        console.log(response.data["num_times"])

    console.log(comicNumber)
    res.render('pages/index', response.data)
    //console.log(response.data)
    })
    .catch(error => {
        //console.log(error)
    })
})

app.get('/next', function(req, res) {
    comicId = comicNumber + 1
    axios.get('http://xkcd.com/' + comicId + '/info.0.json')
    .then(response => {
    console.log(comicNumber)
    res.render('pages/index', response.data)
    //console.log(response.data)
    })
    .catch(error => {
        //console.log(error)
    })
})



app.listen(port)
console.log('running...')



    
