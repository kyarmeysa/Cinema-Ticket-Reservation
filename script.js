const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

GetFromLocalStorage();
Calculate();



container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
        e.target.classList.toggle('selected');
    Calculate();


});
select.addEventListener('change', function (e) {
    Calculate();
});

function Calculate() {
    const SelectedSeats = container.querySelectorAll('.seat.selected');
    const SelectedSeatsArr = [];
    const SeatsArr = [];

    SelectedSeats.forEach(function (seat) {
        SelectedSeatsArr.push(seat);

    })
    seats.forEach(function (seat) {
        SeatsArr.push(seat);

    })

    let SelectedSeatIndexes = SelectedSeatsArr.map(function (seat) {
        return SeatsArr.indexOf(seat);

    })


    let SelectedSeatCount = SelectedSeats.length;
    count.innerText = SelectedSeatCount;
    amount.innerText = SelectedSeatCount * select.value;
    SaveToLocalStorage(SelectedSeatIndexes)
}

function SaveToLocalStorage(indexes) {
    localStorage.setItem('SelectedSeats', JSON.stringify(indexes));
    localStorage.setItem('SelectedMovieIndex', select.selectedIndex);

}
function GetFromLocalStorage() {
    const SelectedSeats = JSON.parse(localStorage.getItem('SelectedSeats'));

    if (SelectedSeats != null && SelectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (SelectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });

    
    }
    


    const SelectedMovieIndex = localStorage.getItem('SelectedMovieIndex');
    if (SelectedMovieIndex != null) {
        select.selectedIndex = SelectedMovieIndex;
    }


   
}