var express = require('express')
    , app = express()
    , bodyParser = require('body-parser') 
    , mongoose = require('mongoose') 

var Schema = mongoose.Schema

var router = express.Router()

app.disable('x-powered-by')
app.set('port', (process.env.PORT || 5000))

// third-party middleware
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://test:testme@ds056688.mongolab.com:56688/heroku-mean') 
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(callback) {
    console.log("connection succeed")
})

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
})

userSchema.pre('save', function(next) {
    var currentDate = new Date()
    this.updated_at = currentDate

    if(!this.created_at)
        this.created_at = currentDate

    next()
})

userSchema.methods.speak = function() {
    console.log(this.name + ' says hello world')
    return this.name
}

var User = mongoose.model('User', userSchema)

var pjia = new User({
    name: 'pjia',
    username: 'jiapengjun',
    password: 'testme'
})

pjia.speak(function(err, name) {
    if(err) return console.log('fail to speak:' + err)
    console.log(name + ' is back')
})

pjia.save(function(err) {
    if(err) return console.log('fail to save:' + err)
    console.log('User saved successfully') 
})

User.find({}, function(err, users) {
    if(err) return console.log('fail to find:' + err)
    console.log(users)
})

var names=[]

router.get('/', function(req, res) {
  res.render('index.jade', {names: names})
}).post('/', function(req, res) {
    names.push(req.body.name)
    res.redirect(req.get('referer'))
})
// Use /node path to test all node method.
app.use('/node', router)

// built-in middleware
app.use(express.static('./public'))

// all no-exist address goto index.html
app.get('*', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html') 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
