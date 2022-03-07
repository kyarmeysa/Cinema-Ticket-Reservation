const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');



container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
        e.target.classList.toggle('selected');
        Calculate();
   

});
 select.addEventListener('change' , function(e){
 Calculate();
 });

 function Calculate(){
    let SelectedSeatCount = container.querySelectorAll('.seat.selected').length;
    let price = select.value;
    count.innerText = SelectedSeatCount;
    amount.innerText = SelectedSeatCount * price;
 }