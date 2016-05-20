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

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
  // },
  // initialize: function() {
  //   this.on('creating', function(model, attrs, options) {
  //     var shasum = crypto.createHash('sha1');
  //     shasum.update(model.get('url'));
  //     model.set('code', shasum.digest('hex').slice(0, 5));
  //   });
  // }
// });




 
module.exports = Link;
