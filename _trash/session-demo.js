var express = require('express')
    , app = express()
    , cookieParser= require('cookie-parser') 
    , session = require('express-session') 

app.use(cookieParser())
app.use(session({secret: 'anystringoftext', 
    saveUninitialized: true, 
    resave: true }))

app.use('/', function(req, res) {
    res.send("hello world")
    console.log(req.cookies)
    console.log('====================')
    console.log(req.session)
})

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
