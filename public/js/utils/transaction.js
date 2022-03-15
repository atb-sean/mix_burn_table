function handleTransactionError(tag, error) {
    if (error.toString().includes('User denied')) {
        console.log(tag + " error user denied = " + error);
        sendMessage("resTransactionError", "트랜잭션 취소");
    } else if (error.toString().includes('insufficient funds')) {
        console.log(tag + " error insufficient funds = " + error)
        sendMessage("resTransactionError", "가스비 부족");
    } else {
        console.log(tag + " error = " + error)
        sendMessage("resTransactionError", error);
    }
}