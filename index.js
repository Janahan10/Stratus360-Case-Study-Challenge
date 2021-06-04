const request = require('request')
var PORT = 7600

request('http://xkcd.com/251/info.0.json', {json: true}, (err, res, body) => {
    if (err) {
        return console.log(err)
    }
    console.log(body)
}).listen(process.env.PORT)