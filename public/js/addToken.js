async function reqRegistTokenToWallet() {
    const tokenAddress = '0x5895C8c2330417e04E1813c67B646f1A3fD3f0B2';
    const tokenSymbol = "CHURU";
    const tokenDecimals = 18;
    const tokenImage = 'https://project-ks1.s3.ap-northeast-2.amazonaws.com/1_acb_goods/token.jpg';

    klaytn.sendAsync(
        {
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage // A string url of the token logo
                }
            },
            id: Math.round(Math.random() * 100000)
        },
        (err, added) => {
            if (added) {
                console.log('Thanks for your interest!')
            } else {
                console.log('Your loss!')
            }
        }
    )
}