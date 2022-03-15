const goverananceContractABI = JSON.parse('[{"constant": true,"inputs": [{"name": "_addr","type": "address"}],"name": "isAdminAddress","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"}],"name": "getAgendaItemCount","outputs": [{"name": "_count","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_proposerAddr","type": "address"},{"name": "_title","type": "string"},{"name": "_contents","type": "string"},{"name": "_startBlock","type": "uint256"},{"name": "_endBlock","type": "uint256"},{"name": "_blind","type": "bool"},{"name": "_canceled","type": "bool"},{"name": "_nftReturned","type": "bool"}],"name": "setAgendaData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"}],"name": "cancelAgendaData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_tokenIdList","type": "uint256[]"}],"name": "notVotedIdList","outputs": [{"name": "_notVotedIdList","type": "uint256[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "proposerCharacterCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_period","type": "uint256"}],"name": "setMinProposePeriod","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_addr","type": "address"},{"name": "_set","type": "bool"}],"name": "setGovernanceSystem","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "minProposePeriod","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_addr","type": "address"}],"name": "setTokenAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_tokenId","type": "uint256"},{"name": "_set","type": "bool"}],"name": "setVoted","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_item","type": "string"}],"name": "addAgendaItemData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"}],"name": "getAgendaDataProposalTokenIdList","outputs": [{"name": "","type": "uint256[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"}],"name": "returnAgendaDataBySystem","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"}],"name": "cancelAgendaDataBySystem","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"}],"name": "getVotingData","outputs": [{"name": "_votingData","type": "uint32[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_itemIdx","type": "uint256"}],"name": "getAgendaItemData","outputs": [{"name": "_item","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_addr","type": "address"},{"name": "_set","type": "bool"}],"name": "setAdminAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "isGameMaster","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_addr","type": "address"}],"name": "setNFTAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"}],"name": "getVotingDataBySystem","outputs": [{"name": "","type": "uint32[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_proposerAddr","type": "address"},{"name": "_proposerTokenIdList","type": "uint256[]"},{"name": "_title","type": "string"},{"name": "_contents","type": "string"},{"name": "_period","type": "uint256"},{"name": "_blind","type": "bool"},{"name": "_itemLen","type": "uint8"},{"name": "_item1","type": "string"},{"name": "_item2","type": "string"},{"name": "_item3","type": "string"},{"name": "_item4","type": "string"},{"name": "_item5","type": "string"},{"name": "_item6","type": "string"},{"name": "_item7","type": "string"},{"name": "_item8","type": "string"}],"name": "addAgendaData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_count","type": "uint256"}],"name": "setProposerCharacterCount","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "tokenAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "stakingNFTAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"}],"name": "getAgendaData","outputs": [{"name": "_id","type": "uint256"},{"name": "_proposerAddr","type": "address"},{"name": "_title","type": "string"},{"name": "_contents","type": "string"},{"name": "_startBlock","type": "uint256"},{"name": "_endBlock","type": "uint256"},{"name": "_blind","type": "bool"},{"name": "_canceled","type": "bool"},{"name": "_nftReturned","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_itemIdx","type": "uint256"},{"name": "_item","type": "string"}],"name": "setAgendaItemData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_idList","type": "uint256[]"}],"name": "setAgendaDataProposalTokenIdList","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "maxProposePeriod","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "newGameMaster","type": "address"}],"name": "transferGameMaster","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "gameMaster","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_proposerAddr","type": "address"},{"name": "_proposerTokenIdList","type": "uint256[]"},{"name": "_title","type": "string"},{"name": "_contents","type": "string"},{"name": "_period","type": "uint256"},{"name": "_blind","type": "bool"},{"name": "_itemLen","type": "uint8"},{"name": "_item1","type": "string"},{"name": "_item2","type": "string"},{"name": "_item3","type": "string"},{"name": "_item4","type": "string"},{"name": "_item5","type": "string"},{"name": "_item6","type": "string"},{"name": "_item7","type": "string"},{"name": "_item8","type": "string"}],"name": "addAgendaDataByAdmin","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"}],"name": "returnCharacter","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getAgendaCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_itemIdx","type": "uint256"},{"name": "_tokenIdList","type": "uint256[]"}],"name": "vote","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_tokenId","type": "uint256"}],"name": "isVoted","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_itemIdx","type": "uint256"}],"name": "removeAgendaItemData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_addr","type": "address"}],"name": "isGovernanceSystem","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_period","type": "uint256"}],"name": "setMaxProposePeriod","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_idx","type": "uint256"},{"name": "_itemIdx","type": "uint256"},{"name": "_count","type": "uint32"}],"name": "setVotingData","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"}]');
const goverananceContactAddr = "0x3e01d17d98515d507d9c733a77a95e02EB6A52b4";
var goverananceContract;
const nftContractABI = JSON.parse('[{"constant": true,"inputs": [{"name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"name": "operator","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"name": "tokenId","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"name": "owner","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "operator","type": "address"},{"name": "_approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "tokenId","type": "uint256"},{"name": "data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": true,"name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "approved","type": "address"},{"indexed": true,"name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "operator","type": "address"},{"indexed": false,"name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"}]');
const nftContractAddr = "0xce8905b85119928e6c828e5cb4e2a9fd2e128bf9";
var nftContract;
const tokenContractABI = JSON.parse('[{"constant": true,"inputs": [{"name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "spender","type": "address"},{"name": "amount","type": "uint256"}],"name": "approve","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "sender","type": "address"},{"name": "recipient","type": "address"},{"name": "amount","type": "uint256"}],"name": "transferFrom","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "recipient","type": "address"},{"name": "amount","type": "uint256"}],"name": "safeTransfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "sender","type": "address"},{"name": "recipient","type": "address"},{"name": "amount","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "account","type": "address"}],"name": "balanceOf","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "recipient","type": "address"},{"name": "amount","type": "uint256"}],"name": "transfer","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "sender","type": "address"},{"name": "recipient","type": "address"},{"name": "amount","type": "uint256"},{"name": "data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "spender","type": "address"}],"name": "allowance","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "recipient","type": "address"},{"name": "amount","type": "uint256"},{"name": "data","type": "bytes"}],"name": "safeTransfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": false,"name": "value","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "spender","type": "address"},{"indexed": false,"name": "value","type": "uint256"}],"name": "Approval","type": "event"}]');
const tokenContractAddr = "0x5895C8c2330417e04E1813c67B646f1A3fD3f0B2";
var tokenContract;

$(function () {
    console.log("init contract");
    goverananceContract = new caver.klay.Contract(goverananceContractABI, goverananceContactAddr);
    nftContract = new caver.klay.Contract(nftContractABI, nftContractAddr);
    tokenContract = new caver.klay.Contract(tokenContractABI, tokenContractAddr);
    readyToContract("governance");
});

async function getMinProposePeriod() {
    return goverananceContract.methods.minProposePeriod().call();
}

async function getMaxProposePeriod() {
    return goverananceContract.methods.maxProposePeriod().call();
}

async function getProposeFee() {
    return goverananceContract.methods.proposeFee().call();
}

async function getProposerCharacterCount() {
    return goverananceContract.methods.proposerCharacterCount().call();
}

async function getAgendaCount() {
    return goverananceContract.methods.getAgendaCount().call();
}

async function getAgendaData(idx) {
    return goverananceContract.methods.getAgendaData(idx).call();
}

async function getAgendaDataProposalTokenIdList(idx) {
    return goverananceContract.methods.getAgendaDataProposalTokenIdList(idx).call();
}

async function getAgendaItemCount(idx) {
    return goverananceContract.methods.getAgendaItemCount(idx).call();
}

async function getAgendaItemData(idx, itemIdx) {
    return goverananceContract.methods.getAgendaItemData(idx, itemIdx).call();
}

async function getVotingData(idx) {
    return goverananceContract.methods.getVotingData(idx).call();
}

async function notVotedIdList(idx, tokenIdList) {
    return goverananceContract.methods.notVotedIdList(idx, tokenIdList).call();
}

async function addAgendaData(addr, tokenIdList, title, contents, period, blind, itemLen, item1, item2, item3, item4, item5, item6, item7, item8, params, callback) {
    return goverananceContract.methods.addAgendaData(addr, tokenIdList, title, contents, period, blind, itemLen, item1, item2, item3, item4, item5, item6, item7, item8).send(params, callback);
}

async function addAgendaDataByAdmin(addr, tokenIdList, title, contents, period, blind, itemLen, item1, item2, item3, item4, item5, item6, item7, item8, params, callback) {
    return goverananceContract.methods.addAgendaDataByAdmin(addr, tokenIdList, title, contents, period, blind, itemLen, item1, item2, item3, item4, item5, item6, item7, item8).send(params, callback);
}

async function cancelAgendaData(idx, params, callback) {
    return goverananceContract.methods.cancelAgendaData(idx).send(params, callback);
}

async function returnCharacter(idx, params, callback) {
    return goverananceContract.methods.returnCharacter(idx).send(params, callback);
}

async function vote(idx, itemIdx, tokenIdList, params, callback) {
    return goverananceContract.methods.vote(idx, itemIdx, tokenIdList).send(params, callback);
}

async function isAdminAddress(addr) {
    return goverananceContract.methods.isAdminAddress(addr).call();
}

async function getTokenAmount(addr) {
    return tokenContract.methods.balanceOf(addr).call().then(caver.utils.hexToNumberString);
}

async function getCharacterCount(addr) {
    return nftContract.methods.balanceOf(addr).call();
}

async function getCharacterTokenId(addr, idx) {
    return nftContract.methods.tokenOfOwnerByIndex(addr, idx).call();
}

async function getCharacterURI(tokenId) {
    return nftContract.methods.tokenURI(tokenId).call();
}

async function setApprovalForAll(operatorAddr, approved, params, callback) {
    return nftContract.methods.setApprovalForAll(operatorAddr, approved).send(params, callback);
}

async function reqAllAgendaData(json) {
    console.log("reqAgendaList");

    getAgendaCount().then(agendaCount => {
        for (var agendaIdx = 0; agendaIdx < agendaCount; agendaIdx++) {
            const _agendaIdx = agendaIdx;
            getAgendaData(_agendaIdx).then(async agendaRet => {
                var pos = {
                    "id": agendaRet[0],
                    "address": agendaRet[1],
                    "title": agendaRet[2],
                    "contents": agendaRet[3],
                    "startBlock": agendaRet[4],
                    "endBlock": agendaRet[5],
                    "blind": agendaRet[6],
                    "canceled": agendaRet[7],
                    "nftReturned": agendaRet[8],
                    "proposalTokenIdList": await getAgendaDataProposalTokenIdList(_agendaIdx),
                    "periodBlock": agendaRet[5] - agendaRet[4]
                }

                getAgendaItemCount(_agendaIdx).then(async itemCount => {
                    var itemList = [];
                    var votingCountList = await getVotingData(_agendaIdx);
                    for (var itemIdx = 0; itemIdx < itemCount; itemIdx++) {
                        itemList.push(await getAgendaItemData(_agendaIdx, itemIdx));
                    }

                    pos["items"] = itemList;
                    pos["votingData"] = votingCountList;

                    sendMessage("resAgendaData", JSON.stringify(pos));
                });
            });
        }
    });
}

async function reqOfferAgenda(json) {
    console.log("reqOfferAgenda");
    var data = JSON.parse(json);
    var address = data['address'];
    var agenda = data['agenda'];
    var item = agenda['items'];
    var item1 = item[0];
    var item2 = item[1];
    var item3 = item.length > 2 ? item[2] : "";
    var item4 = item.length > 3 ? item[3] : "";
    var item5 = item.length > 4 ? item[4] : "";
    var item6 = item.length > 5 ? item[5] : "";
    var item7 = item.length > 6 ? item[6] : "";
    var item8 = item.length > 7 ? item[7] : "";

    var isAdmin = await isAdminAddress(address);
    var count = await getAgendaCount();

    const additionalGasLimit = 100000;
    if (isAdmin) {
        addAgendaDataByAdmin(address, agenda['proposalTokenIdList'], agenda['title'], agenda['contents'], agenda['periodBlock'], agenda['blind'], item.length, item1, item2, item3, item4, item5, item6, item7, item8, {
            from: address,
            gas: gasLimit + additionalGasLimit * agenda['proposalTokenIdList'].length
        }, async function (error, transactionHash) {
            if (error) {
                handleTransactionError("reqOfferAgenda() - admin", error);
                return;
            } else {
                console.log("reqOfferAgenda() - admin success")

                agenda['id'] = count;
                agenda['startBlock'] = Number(await caver.rpc.klay.getBlockNumber());
                agenda['endBlock'] = agenda['startBlock'] + agenda['periodBlock'];

                sendMessage("resOfferAgenda", JSON.stringify(agenda));
            }
        });
    } else {
        addAgendaData(address, agenda['proposalTokenIdList'], agenda['title'], agenda['contents'], agenda['periodBlock'], agenda['blind'], item.length, item1, item2, item3, item4, item5, item6, item7, item8, {
            from: address,
            gas: gasLimit + additionalGasLimit * agenda['proposalTokenIdList'].length
        }, async function (error, transactionHash) {
            if (error) {
                handleTransactionError("reqOfferAgenda()", error);
                return;
            } else {
                console.log("reqOfferAgenda() success")

                agenda['id'] = count;
                agenda['startBlock'] = Number(await caver.rpc.klay.getBlockNumber());
                agenda['endBlock'] = agenda['startBlock'] + agenda['periodBlock'];

                sendMessage("resOfferAgenda", JSON.stringify(agenda));
            }
        });
    }
}

async function reqCancelAgenda(json) {
    console.log("reqCancelAgenda");
    var data = JSON.parse(json);
    var address = data['address'];
    var agenda = data['agenda'];

    const additionalGasLimit = 100000;
    cancelAgendaData(agenda['id'], {
        from: address,
        gas: gasLimit + additionalGasLimit * agenda['proposalTokenIdList'].length
    }, async function (error, transactionHash) {
        if (error) {
            handleTransactionError("reqCancelAgenda()", error);
            return;
        } else {
            console.log("reqCancelAgenda() success")

            agenda['votingData'] = [0, 0, 0, 0, 0, 0, 0, 0];
            agenda['canceled'] = true;
            agenda['nftReturned'] = true;

            sendMessage("resUpdateAgendaData", JSON.stringify(agenda));
        }
    });
}

async function reqReturnCharacterFromAgenda(json) {
    console.log("reqReturnCharacterFromAgenda");
    var data = JSON.parse(json);
    var address = data['address'];
    var agenda = data['agenda'];

    const additionalGasLimit = 100000;
    returnCharacter(agenda['id'], {
        from: address,
        gas: gasLimit + additionalGasLimit * agenda['proposalTokenIdList'].length
    }, async function (error, transactionHash) {
        if (error) {
            handleTransactionError("reqReturnCharacterFromAgenda()", error);
            return;
        } else {
            console.log("reqReturnCharacterFromAgenda() success")

            agenda['nftReturned'] = true;

            sendMessage("resUpdateAgendaData", JSON.stringify(agenda));
        }
    });
}

async function reqVoteAgenda(json) {
    console.log("reqVoteAgenda");
    var data = JSON.parse(json);
    var address = data['address'];
    var selectedIdx = data["selectedIdx"];
    var agenda = data['agenda'];
    var tokenIdList = data['tokenIdList'];

    const additionalGasLimit = 100000;
    vote(agenda['id'], selectedIdx, tokenIdList, {
        from: address,
        gas: gasLimit + additionalGasLimit * tokenIdList.length
    }, async function (error, transactionHash) {
        if (error) {
            handleTransactionError("reqReturnCharacterFromAgenda()", error);
            return;
        } else {
            console.log("reqReturnCharacterFromAgenda() success")

            agenda['votingData'][selectedIdx] += agenda['blind'] ? 0 : tokenIdList.length;

            sendMessage("resUpdateAgendaData", JSON.stringify(agenda));
        }
    });
}

async function reqVotableTokenList(json) {
    console.log("reqVotableTokenList");
    var data = JSON.parse(json);
    var address = data['address'];
    var tokenIdList = data["tokenIdList"];
    var agenda = data['agenda'];

    notVotedIdList(agenda['id'], tokenIdList).then(idList => {
        var pos = { "tokenIdList": idList };
        sendMessage("resVotableTokenList", JSON.stringify(pos));
    });
}

async function reqBlockNumber() {
    var blockNumber = Number(await caver.rpc.klay.getBlockNumber());

    var pos = { "block": blockNumber };
    sendMessage("resBlockNumber", JSON.stringify(pos));
}

async function reqConnectedWalletAddr() {
    var address = klaytn.selectedAddress;

    var pos = { "address": address };
    sendMessage("resConnectedWalletAddr", JSON.stringify(pos));
}

async function reqConnectWallet() {
    console.log("reqConnectWallet");

    klaytn.enable().then(async (accounts) => {
        console.log(accounts[0] + " " + klaytn.networkVersion);
        var address = accounts[0];
        var nftUsing = await nftContract.methods.isApprovedForAll(address, goverananceContactAddr).call();
        var isAdminAddr = await isAdminAddress(address);
        var tokenAmount = await getTokenAmount(address);

        var pos = {
            "address": address,
            "tokenUsing": false,
            "nftUsing": nftUsing,
            "isAdmin": isAdminAddr,
            "tokenAmount": tokenAmount
        };
        sendMessage("resConnectWallet", JSON.stringify(pos));
    });
}

async function reqCharacterList(json) {
    console.log("reqCharacterList");
    var data = JSON.parse(json);
    var address = data['address'];
    getCharacterCount(address).then(async (characterCount) => {
        for (var i = 0; i < characterCount; i++) {
            getCharacterTokenId(address, i).then(async (id) => {
                var url = await getCharacterURI(id);
                url = url.replace('https://ipfs.io', 'https://aven_gateway.mypinata.cloud')

                var pos = {
                    "tokenId": id,
                    "url": url
                };

                console.log("url : " + url);
                sendMessage("resCharacterData", JSON.stringify(pos));
            });
        }
    });
}

async function reqNFTUsing(json) {
    console.log("reqNFTUsing");
    var data = JSON.parse(json);
    var address = data['address'];

    setApprovalForAll(goverananceContactAddr, true, {
        from: address,
        gas: gasLimit
    }, function (error, transactionHash) {
        if (error) {
            if (error.toString().includes('User denied')) {
                console.log("reqNFTUsing() error user denied = " + error);
                sendMessage("resTransactionError", "Transaction Canceled");
                return;
            } else if (error.toString().includes('insufficient funds')) {
                console.log("reqNFTUsing() error insufficient funds = " + error)
                sendMessage("resTransactionError", "Insufficient gas");
                return;
            }
            console.log("reqNFTUsing() error = " + error)
            sendMessage("resTransactionError", error);
            return;
        } else {
            console.log("reqUsingNFT() success")
            sendMessage("resNFTUsing", "");
        }
    });
}