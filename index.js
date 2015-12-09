var express = require('express')
    , app = express()
    , bodyParser = require('body-parser') 

app.disable('x-powered-by')
app.set('port', (process.env.PORT || 5000))

// third-party middleware
app.use(bodyParser.urlencoded({ extended: true }))


var names=[]

app.get('/route', function(req, res) {
  res.render('index.jade', {names: names})
}).post('/route', function(req, res) {
    names.push(req.body.name)
    res.redirect('/route')
})

// built-in middleware
app.use(express.static('./public'))

// all no-exist address goto index.html
app.get('*', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html') 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
