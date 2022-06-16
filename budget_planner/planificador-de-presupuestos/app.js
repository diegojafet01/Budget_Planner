const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtl = document.querySelector('#ion-allert-controller');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value='';
    amountInput.value='';
};

confirmBtn.addEventListener('click', ()=>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().lenth <= 0 ||
       enteredAmount<= 0 ||
       enteredAmount.trim().lenth <= 0)
    {
        alertCtl.create({message:'Rellene todos los campos!', 
        header: 'No todos los campos estan llenos!',
        buttons: ['Okay']
    }).then(alertElement =>{
        alertElement.present();
    });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': L. ' + enteredAmount;

    expenseList.appendChild(newItem);
    totalExpenses += + enteredAmount; 

    totalExpensesOutput.textContent = totalExpenses;

    clear();
    console.log(enteredReason, enteredAmount);
});

cancelBtn.addEventListener('click', clear);