var express = require('express')
    , app = express()

app.disable('x-powered-by')

app.use(express.static('./public'))
app.all('*', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html') 
})

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
