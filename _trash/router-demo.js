var express = require('express')
    , app = express()
    , bodyParser = require('body-parser') 

app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', __dirname+'/server/views')

var names=[]
var router = express.Router()

router.get('/', function(req, res) {
  res.render('sample.jade', {names: names})
}).post('/', function(req, res) {
    names.push(req.body.name)
    res.redirect(req.get('referer'))
})
app.use('/router', router)

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
