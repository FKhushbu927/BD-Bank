
//1. add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('withdraw button clicked');

    // 2. get the withdraw amount from the withdraw input filed
     const withdrawField = document.getElementById('withdraw-input');
     const newWithdrawAmountString = withdrawField.value;
     const  newWithdrawAmount = parseFloat(newWithdrawAmountString);
     
     //
     const withdrawTotalElement = document.getElementById('withdraw-total');
     const previousWithdrawTotalString = withdrawTotalElement.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString); 

     // calculate total withdraw amount
     const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
     withdrawTotalElement.innerText = currentWithdrawTotal;

    //set total withdraw amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText; 
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     //calculate new balancetotal
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotal;
    //clear the input field
    withdrawField.value = '';

})