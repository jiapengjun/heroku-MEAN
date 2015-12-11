var express = require('express')
    , app = express()
    , mongoose = require('mongoose') 
    , database = require('./server/config/database')
    , User = require('./server/models/user')

mongoose.connect(database.url)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(callback) {
    console.log('connection succeed')
})

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

app.use(express.static('./public'))
app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
