// models/Post.js

var mongoose = require('mongoose');

// schema
var goodsSchema = mongoose.Schema({
    name: { type: String, require: true },
    imageUrl: { type: String },
    exp: { type: String },
    mix: { type: Number },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    nft: {type: String}
});

// model & export
var Goods = mongoose.model('goods', goodsSchema);
module.exports = Goods;