function saveReminder() {
    var date = document.getElementById('reminder-date').value;
    var message = document.getElementById('reminder-message').value;
    var email = document.getElementById('reminder-email').value;
    var number = document.getElementById('reminder-number').value;
    var subject = document.getElementById('reminder-subject').value;

    // var reminderDateTime = new Date(date);
  
    // if (reminderDateTime < new Date()) {
    //   alert('Please select a future date and time.');
    //   return;
    // }
  
    var reminder = {
      date:date,
      message: message,
      email: email,
      number: number,
      subject: subject
    };
  
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));
  
  }
  
  function displayReminders() {
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    var reminderList = document.getElementById('reminder-list');
    reminderList.innerText = '';
  
    reminders.forEach(function(reminder) {
      var reminderItem = document.createElement('li');
      reminderItem.classList.add('reminder-item');
      reminderItem.innerText = reminder.date + ' ' + reminder.subject + ' ' + reminder.message +' ' + reminder.email + ' ' + reminder.number ;
      var shubham1 = reminderItem
      // reminderList.appendChild(shubham1);

      
    
        let message = shubham1.innerText;
        let id = Math.floor(Math.random() * 100);
        let eventreminder = createReminder(id, message);
        list.appendChild(eventreminder);
      
      
    });
  }
  
  displayReminders();