document.getElementById('btn-diposit').addEventListener('click',function(){
    const userDiposit = document.getElementById('diposit-amount');
    const dipositAmount = userDiposit.value;
    const dipositAmountNumber = parseFloat(dipositAmount);
    
    const totalDiposit = document.getElementById('total-diposit');
    const totalDipositAmount = totalDiposit.innerText;
    const totalDipositeAmountNumber = parseFloat(totalDipositAmount);
    const currentDepositTotal =  dipositAmountNumber + totalDipositeAmountNumber ;
    totalDiposit.innerText = currentDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal +  dipositAmountNumber;
    balanceTotalElement.innerText = currentBalanceTotal;


    userDiposit.value = '';
})