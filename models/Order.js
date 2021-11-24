// models/Post.js

var mongoose = require('mongoose');

// schema
var orderSchema = mongoose.Schema({
    title: { type: String },
    goods: { type: String },
    name: { type: String, required: [true, '수취인은 필수 항목입니다.'] },
    kakao: { type: String, required: [true, '카카오톡 닉네임은 필수 항목입니다.'] },
    phone1: { type: String, required: [true, '연락처1은 필수 항목입니다.'] },
    phone2: { type: String },
    address: { type: String, required: [true, '주소는 필수 항목입니다.'] },
    message: { type: String },
    wallet: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// model & export
var Order = mongoose.model('order', orderSchema);
module.exports = Order;