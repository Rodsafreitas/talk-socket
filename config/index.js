var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var path = require('path');
var server = require('http').Server(app);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

module.exports = Object.assign({app: app},{server : server}, {port: port});