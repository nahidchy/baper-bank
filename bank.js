document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const newDeposit = parseFloat(depositField.value);
    const depositAmount = document.getElementById('deposit-amount');
    const newDepositAmount = parseFloat(depositAmount.innerText);
    const totalAmount = newDeposit + newDepositAmount;
    depositAmount.innerText = totalAmount;
    const balanceAmount = document.getElementById("balance-amount");
    const newBalanceAmount = parseFloat(balanceAmount.innerText);
    balanceAmount.innerText = totalAmount + newBalanceAmount;
    depositField.value = "";
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawtField = document.getElementById('withdraw-input');
    const newWithdraw = parseFloat(withdrawtField.value);
    const withdrawtAmount = document.getElementById('withdraw-amount');
    const newWithdrawAmount = parseFloat(withdrawtAmount.innerText);
    const totalWithdraw = newWithdraw + newWithdrawAmount;
    withdrawtAmount.innerText = totalWithdraw;
    const balanceAmount = document.getElementById("balance-amount");
    const newBalanceAmount = parseFloat(balanceAmount.innerText);
    balanceAmount.innerText = newBalanceAmount - totalWithdraw;
    
    withdrawtField.value = "";
})

