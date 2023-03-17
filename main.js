
// JavaScript code to handle form/login submission
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    // validate username and password
    if (username === 'shub' && password === '12') {
    // redirect to reminders page
    window.location.href = 'Reminder.html';
    } 
    else {
    alert('Login Failed Retry.');
    }

});