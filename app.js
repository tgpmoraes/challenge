var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(methodOverride('X-HTTP-Method'))			//Microsoft
app.use(methodOverride('X-HTTP-Method-Override'))	//Google
app.use(methodOverride('X-Method-Override'))		//IBM
app.use(methodOverride('_method'))

app.use('/', routes)

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!')
})

module.exports = app