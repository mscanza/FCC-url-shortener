var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true })

var siteSchema = new mongoose.Schema({original_url: String, short_url: Number})
var ShortModel = mongoose.model('ShortModel', siteSchema)

exports.ShortenedURLModel = ShortModel;






