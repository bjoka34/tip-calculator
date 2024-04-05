let amount = document.getElementById('amount');

function changeValue(result) {
    amount.innerHTML = `$ ${result}`;
}

function calculatePercentage(event) {
    event.preventDefault();
    let number = document.querySelector('#bill_amount').value;
    let percentage = document.querySelector('#tip_percentage').value;
    const result = (number * percentage) / 100;

    changeValue(result);
}
