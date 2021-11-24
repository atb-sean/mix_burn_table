// routes/orders.js

var express  = require('express');
var router = express.Router();
var Order = require('../models/Order');
var Goods = require('../models/Goods');
const { now } = require('mongoose');

function isOwnerAddr(addr) {
  return false;
}

router.get('/', function(req, res){
  res.render('orders/check', {errorMessage:""});
  // Goods.findOne({}, function (err, goods) {
  //   console.log(goods);
  // });
});

// Index 
router.post('/', function(req, res){
  var wallet = req.body.wallet;

  Order.count(function(err, count) {
    Order.find({ wallet: wallet })
    .sort('-createdAt')
    .exec(function (err, orders) {
      if (err) return res.json(err);
      res.render('orders/index', { orders: orders, wallet: wallet, count:count});
    });
  });
});

// New
router.get('/new', function(req, res){
  Goods.findOne({}, function (err, goods) {
    const nowDate = Date.now();
    const startDate = Date.parse(goods.startDate) - 32400000; // UTC 0000 -> UTC 0900 (한국 표준시) 변경
    const endDate = Date.parse(goods.endDate) - 32400000; // UTC 0000 -> UTC 0900 (한국 표준시) 변경
    if (nowDate < startDate || endDate < nowDate)  {
      res.render('orders/check', {errorMessage:"현재 굿즈 신청기간이 아닙니다."});
      return;
    }

    var order = req.flash('order')[0] || {};
    var errors = req.flash('errors')[0] || {};
    res.render('orders/new', { order:order, errors:errors, goods:goods });
  });
});

// create
router.post('/new', function (req, res) {
  Order.create(req.body, function (err, order) { 
    if (err) {
      console.log('err = ' + err)
      req.flash('order', req.body);
      req.flash('errors', parseError(err));
      return res.redirect('/orders/new');
    }
    res.redirect('/orders');
  });
});

// show
router.get('/:id', function (req, res) {
  var order = req.flash('order')[0];
  var errors = req.flash('errors')[0] || {};
  if (!order) {
    Order.findOne({ _id: req.params.id }, function (err, order) {
      if (err) return res.json(err);
      res.render('orders/edit', { order: order, errors: errors });
    });
  } else {
    res.render('orders/edit', { order: order, errors: errors });
  }
});

// update
router.put('/:id', function(req, res){
  var parsed = {};
  var error = false;
  if (req.body.name == "") {
    parsed.name = { message: '수취인은 필수 항목입니다.' }
    error = true;
  }
  if (req.body.kakao == "") {
    parsed.kakao = { message: '카카오톡 닉네임은 필수 항목입니다.' }
    error = true;
  }
  if (req.body.phone1 == "") {
    parsed.phone1 = { message: '연락처1은 필수 항목입니다.' }
    error = true;
  }
  if (req.body.address == "") {
    parsed.address = { message: '주소는 필수 항목입니다.' }
    error = true;
  }
  if (error) {
    req.body._id = req.params.id;
    req.flash('order', req.body);
    req.flash('errors', parsed);
    return res.redirect('/orders/' + req.params.id);
  }

  Order.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, order) {
    if (err) {
      req.flash('order', req.body);
      req.flash('errors', parseError(err));
      return res.redirect('/orders/' + req.params.id);
    }
    res.redirect('/orders');
  });
});

// destroy
router.delete('/:id', function(req, res){
  Order.deleteOne({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect('/orders');
  });
});

module.exports = router;

function parseError(errors) {
  var parsed = {};
  if (errors.name == 'ValidationError') {
    for (var name in errors.errors) {
      var validationError = errors.errors[name];
      parsed[name] = { message: validationError.message };
    }
  }
  else {
    parsed.unhandled = JSON.stringify(errors);
  }
  return parsed;
}