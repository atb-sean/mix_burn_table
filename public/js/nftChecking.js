// browserify public/js/nftChecking.js -o public/js/nftChecking_b.js 
const Caver = require('caver-js')

async function hasAnyNft(_contract) {
    if (_contract == "") {
        return true;
    }

    const _addr = klaytn.selectedAddress;
    if (_addr == "") {
        return false;
    }

    const caver = new Caver(klaytn);
    const kip17 = caver.kct.kip17.create(_contract);
    kip17.balanceOf(_addr).then(console.log);
    return await kip17.balanceOf(_addr) > 0;
}

if (typeof window !== 'undefined') {
    window.hasAnyNft = function (contract) { return hasAnyNft(contract); }
}