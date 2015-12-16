var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , Comment = require('./server/models/comment')
//    , morgan = require('morgan')

mongoose.connect(process.env.MONGOLAB_URI)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(callback) { console.log('connection succeed') })

app.disable('x-powered-by')
// app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('./public'))

app.post('/feedback', function(req, res) {
    var comment = new Comment(req.body)
    comment.save(function(err) {
        if(err) return console.log('fail to save:' + err)
        // console.log('Comment saved')
    })

    res.send("Comment received!")
})

/*
app.all('*', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html') 
})
*/

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
