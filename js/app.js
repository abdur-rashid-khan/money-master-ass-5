// creat a function for get all input value
function getInputValue(inputSelect,condition){
   let getvalue = document.getElementById(inputSelect);
   let covertValue=parseInt(getvalue.value);
   if(getvalue.value=='' && condition==true){
      alert('Typing Now');
      location.replace('index.html')
   }else if(covertValue < 0){
         alert('Places Enter Valid Positive Number');
         location.replace('index.html')
   }else{
      let covertGetValue=parseInt(getvalue.value);
      return covertGetValue;
   }
}





//calculate 
let calculateBtn=document.getElementById('calculate');
calculateBtn.addEventListener('click',function(){
   const incomeInputdId = 'income';
   const getincomeValue = getInputValue(incomeInputdId,true);

   const foodInputId ='food';
   const foodGetValue=getInputValue(foodInputId,true);

   const rentInputId='rent';
   const rentGetValue=getInputValue(rentInputId,true);

   const clothesInputId='clothes';
   const clothesGetValue=getInputValue(clothesInputId,true);


   // Total Expenses
   let totalExpenses=foodGetValue+rentGetValue+clothesGetValue;
   let totalExpensesTagSelete =document.getElementById('totalExpenses');
   totalExpensesTagSelete.innerText=totalExpenses;


   // total Balance
   let currentBalance =getincomeValue - totalExpenses ; 
   let totalBalanceTagSelect=document.getElementById('totalBalance');
   totalBalanceTagSelect.innerText=currentBalance;


   // error message
   if(totalExpenses > getincomeValue){
      let errorOne=document.getElementById('lowBalance');
      errorOne.style.display='block';
      errorOne.innerText='Expenses are higher than your income';
   }else{
      document.getElementById('lowBalance').style.display='none';
   }
});


// saving 
document.getElementById('saveBtn').addEventListener('click',function(){
   // The first function is called
   const saveInputValue = 'saveInput';
   const getSaveValue = getInputValue(saveInputValue,true);
   
   const totalIncome = getInputValue('income');
   let saving=totalIncome/100*getSaveValue;
   document.getElementById('savingAmount').innerText=saving;
   // get total Balance
   let totalBalance=document.getElementById('totalBalance');
   let covertTotalBalance=parseInt(totalBalance.innerText);

   // Remaining Amount
   let remainingAmount = covertTotalBalance - saving ;
   document.getElementById('remainingAmount').innerText=remainingAmount;
   let errorTwo=document.getElementById('errorShowTwo');

// error message
   if(remainingAmount < 0){
      errorTwo.innerText='Curren Balance From saving large'
      errorTwo.style.display='block';
   }else{
      errorTwo.style.display='';
   }
})