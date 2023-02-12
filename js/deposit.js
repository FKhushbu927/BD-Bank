

//step:1 add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 get the deposit amount from deposit input field
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositTotal = parseFloat(newDepositAmountString);

    //step-3: get the current deposit total
    //for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4 add numbers to set the total deposit
    const currentDepositTotal = newDepositTotal + previousDepositTotal;

    depositTotalElement.innerText = currentDepositTotal;

    //step 5 get the curent balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    ///step 4 add numbers to calculate the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
    //step - clear the deposit field

    depositField.value = '';
})