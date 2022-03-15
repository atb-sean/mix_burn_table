// browserify public/js/requireModule.js -o public/js_browserify/requireModule.js
const Caver = require('caver-js')
const BigNumber = require('bignumber.js');
const telegramPush = require('telegram-push');

if (typeof window !== 'undefined') {
    window.Caver = Caver;
    window.BigNumber = BigNumber;
    window.telegramPush = telegramPush;
}