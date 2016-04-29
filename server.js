var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')


var app = express();

app.use(express.static('public'))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))


app.use('/', function(req, res){
  res.sendfile('index.html')
})

app.listen(3000)
