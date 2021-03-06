// browserify public/js/wallet.js -o public/js/bundle.js 
const Caver = require('caver-js')
var mixPeb = 0;
var mix = 0;
var nftContract = "";
var contractABI = JSON.parse('[{		"constant": false,		"inputs": [			{				"name": "amount",				"type": "uint256"			}		],		"name": "burn",		"outputs": [],		"payable": false,		"stateMutability": "nonpayable",		"type": "function"	}]');
const contractAddress = '0xdd483a970a7a7fef2b223c3510fac852799a88bf'

$(function() {
    $('#wallet').val(getConnectedWallet());
    $('#newSubmitBtn').click(submitButton);
    mix = $('#mixValue').text();
    $('#mixValue').text("");
    mixPeb = BigInt(mix * 1000000000000000000);
    nftContract = $('#nftContract').text();
    $('#nftContract').text("");
});

async function hasAnyNft() {
    if (nftContract == "") {
        return true;
    }

    const _addr = klaytn.selectedAddress;
    if (_addr == "") {
        return false;
    }

    const caver = new Caver(klaytn);
    const kip17 = caver.kct.kip17.create(nftContract);
    kip17.balanceOf(_addr).then(console.log);
    return await kip17.balanceOf(_addr) > 0;
}

function burnTokenAndSubmit() {
    if (!klaytn.selectedAddress) {
        alert('지갑 정보가 유효하지 않습니다.');
        return;
    }

    const caver = new Caver(klaytn);
    const kip7 = caver.kct.kip7.create(contractAddress);
    kip7.balanceOf(klaytn.selectedAddress).then((amount) => {
        if (amount < mixPeb) {
            alert('MIX가 충분하지 않습니다.');
            return;
        }

        const tokenContract = new caver.klay.Contract(contractABI, contractAddress);
        tokenContract.methods.burn(mixPeb).send({
            from: klaytn.selectedAddress,
            gas: '2500000', // max 2.5 klay
        }, function (error, transactionHash) {
            console.log("error = " + error)
            console.log("transactionHash = " + transactionHash)
            if (!error) {
                $('#newForm').submit();
            }
        });
    })
    
}

function checkField() {
    var valid = true;
    /*
    if (!$('#name').val()) {
        $('#name').addClass("is-invalid");
        valid = false;
    } else {
        $('#name').removeClass("is-invalid");
    }

    if (!$('#kakao').val()) {
        $('#kakao').addClass("is-invalid");
        valid = false;
    } else {
        $('#kakao').removeClass("is-invalid");
    }

    if (!$('#phone1').val()) {
        $('#phone1').addClass("is-invalid");
        valid = false;
    } else {
        $('#phone1').removeClass("is-invalid");
    }
    
    if (!$('#address').val()) {
        $('#address').addClass("is-invalid");
        valid = false;
    } else {
        $('#address').removeClass("is-invalid");
    }
    */

    return valid;
}

async function submitButton() {
    if (!checkField()) {
        return;
    }

    if (!checkAgreement()) {
        return;
    }

    if (await hasAnyNft() == false) {
        alert('ACB 홀더만 참여 가능 한 이벤트 입니다!');
        window.location.href = '/';
        return;
    }

    alert('확인을 누르면 ' + mix + ' MIX가 소모되는 트랜잭션이 발생됩니다.');

    burnTokenAndSubmit();
}

function checkAgreement() {
    if ($('input:checkbox[name=agree]').is(':checked')) {
        return true;
    }

    alert('아래 확인 사항을 읽고 동의 해 주세요.');
    return false;
}
