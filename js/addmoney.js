
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amountField = parseFloat(document.getElementById('amount-field').value);
    const passwordField = document.getElementById('password-field').value;

    if (Number(passwordField) == 123) {
        let availableBalance = parseFloat(document.getElementById('available-balance').innerText);
        const currentBalance = availableBalance + amountField;
        document.getElementById('available-balance').innerText = currentBalance;
    }
    else {
        alert('Please type correct credectial')
    }


})