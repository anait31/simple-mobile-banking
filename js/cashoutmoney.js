
document.getElementById('cashout-money-btn').addEventListener('click', function() {
    const removeClassFromCashoutBtn = document.getElementById('cashout-money');
    removeClassFromCashoutBtn.classList.remove('hidden');

    const addMoneySection = document.getElementById('add-money');
    addMoneySection.classList.add('hidden');
})

document.getElementById('add-moneys').addEventListener('click', function() {
    const removeClassFromCashoutBtn = document.getElementById('cashout-money');
    removeClassFromCashoutBtn.classList.add('hidden');

    const addMoneySection = document.getElementById('add-money');
    addMoneySection.classList.remove('hidden');
})

// Logout Action to Login Page

document.getElementById('logout-btn').addEventListener('click', function () {
    console.log('user Logged Out');
    window.location.href = '../index.html';
})