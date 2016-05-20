var db = require('../config');
var crypto = require('crypto');
var rh = require('../../lib/request-handler');
var mongoose = require('mongoose');

var UrlSchema = mongoose.Schema({
  url: String,
  baseURL: String,
  code: String,
  title: String,
  visits: Number,
  link: String
});

var Link = mongoose.model('Link', UrlSchema);

UrlSchema.pre('save', function(next, model) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

 
module.exports = Link;
