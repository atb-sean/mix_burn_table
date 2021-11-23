// routes/orders.js

var express  = require('express');
var router = express.Router();
var Order = require('../models/Order');

function isOwnerAddr(addr) {
  return false;
}

// Index 
router.get('/', function(req, res){
  let { wallet } = req.query;
  var condition;
  if (isOwnerAddr(wallet)) {
    condition = {}
  } else {
    condition = {wallet:wallet}
  }

  Order.find(condition)
  .sort('-createdAt')
  .exec(function(err, orders){
    if(err) return res.json(err);
    res.render('orders/index', {orders:orders});
  });
});

// New
router.get('/new', function(req, res){
  var order = req.flash('order')[0] || {};
  var errors = req.flash('errors')[0] || {};
  res.render('orders/new', { order:order, errors:errors });
});

// create
router.post('/', function (req, res) {
  Order.create(req.body, function (err, order) { 
    if (err) {
      console.log('err = ' + err)
      req.flash('order', req.body);
      req.flash('errors', parseError(err));
      return res.redirect('/orders/new');
    }
    res.redirect('/orders?wallet=' + req.body.wallet);
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
    res.redirect('/orders?wallet=' + req.body.wallet);
  });
});

// destroy
router.delete('/:id', function(req, res){
  Order.deleteOne({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect('/orders?wallet=' + req.body.wallet);
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