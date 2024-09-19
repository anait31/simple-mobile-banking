document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('Login Button Clicked');
    const usernameField = document.getElementById('username-field').value;
    const passwordField = document.getElementById('password-field').value;
    
    // console.log(usernameField, passwordField);
    if(usernameField === 'abc' && Number(passwordField) === 123) {
        window.location.href = '../home.html';
    }
    else {
        alert('Please type correct credentials');
    }
})