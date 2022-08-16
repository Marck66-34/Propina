let bill = document.querySelector(".inputs-section__bill-input");
let billNumber = parseInt(bill.value);
console.log(billNumber);
let people = document.querySelector('.inputs-section__people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');

let totalResult = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.btns__button');
let alert = document.querySelector("#alert");

let tipValue = 5;
buttons.forEach(element =>{
    element.addEventListener('click', event=>{
        //cabiar estilos
        removeActive();
        element.classList.add('btns__button--selected')
         tipValue = parseInt(event.target.innerText.slice(0,-1));
        //calculo de tip amount
        calculateTip();
    });
});

//actualizando el bill 
bill.addEventListener('input', ()=>{
    billNumber = parseFloat(bill.value)
   calculateTip()
});
//actualizando custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('click',()=>{
 removeActive();
})
custom.addEventListener('input', ()=>{
   
    tipValue = parseInt(custom.value);
    if (!isNaN(tipValue)){
        calculateTip()
    }
  
});
function removeActive(){
     buttons.forEach(element =>{
            element.classList.remove('btns__button--selected');
        })
}
//actualizando personas 
people.addEventListener("input", () => {
  peopleNumber = parseFloat(people.value);
  if(peopleNumber == 0 || isNaN(peopleNumber) ){
    people.style.borderColor ='rgb(164, 68, 68)';
    alert.classList.add('error');
  }else{
    alert.classList.remove('error');
    people.style.borderColor ='hsl(189, 41%, 97%)';
    calculateTip();
  }

});
//reset
let resetBtn = document.querySelector(".results-section__reset");
resetBtn.addEventListener('click', ()=>{
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'Custom';
    calculateTip();
})
function calculateTip() {
    tipResult.innerText = ((billNumber * tipValue /100)/peopleNumber).toFixed(2)
    totalResult.innerText = (((billNumber * tipValue / 100 ) + billNumber)/peopleNumber).toFixed(2);
}