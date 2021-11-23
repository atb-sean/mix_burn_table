// models/Post.js

var mongoose = require('mongoose');

// schema
var goodsSchema = mongoose.Schema({
    name: { type: String, require: true },
    imageUri: { type: String },
    exp: { type: String },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
});

// model & export
var Goods = mongoose.model('order', goodsSchema);
module.exports = Goods;