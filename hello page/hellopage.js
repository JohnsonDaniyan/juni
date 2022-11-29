let submitField = document.getElementById('selectField');

submitField.addEventListener('click', chooseField);

let selectField = document.getElementById('profession').value;

function chooseField() {
    if (selectField === 'fed') {
        window.location.href = 'http://127.0.0.1:5500/frontend%20page/fed.html';
        console.log('You chose FED.');
    }
    if (selectField === 'bballer') {
        //Direct to Basketball page
        console.log('You chose Basketballer');
    }
    if (selectField === 'artist') {
        //Direct to Artist page
        console.log('You chose Artist');
    }
    if (selectField === 'photograper') {
        //Direct to photographer page
        console.log('You chose Photographer');
    }
}