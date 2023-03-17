const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");

// Create reminder function (Template Card)
function createReminder(id, message) {
    // Error handling
    if (message && message.length > 450) {
        alert("We only support 45 characters");
        return;
    } else if (!message) {
        alert("Please enter a Reminder");
        return;
    }

    const li = document.createElement("li");
    li.id = id;
    li.className = "reminder";
    const div = document.createElement("div");
    div.className = "text";
    div.innerText = message;

    // Actions container
    const actionContainer = document.createElement("div");
    actionContainer.className = "actions"

    // Have the check and delete buttons
    const disableBtn = document.createElement("button");
    disableBtn.className = "btn-disable";
    disableBtn.innerText = "Disable";

    const enableBtn = document.createElement("button");
    enableBtn.className = "btn-enable";
    enableBtn.innerText = "Enable";

    const modifyBtn = document.createElement("button");
    modifyBtn.className = "btn-modify";
    modifyBtn.innerText = "Modify";
    // modifyBtn.id = "modifyReminder";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.innerText = "Delete";

    

    // Events handler functions
    disableBtn.addEventListener("click", function () {
        if (li.id == id) {
            div.style.textDecoration = "line-through";
            div.style.color= "white";

        }
    });

    enableBtn.addEventListener("click", function () {
        if (li.id == id) {
            div.style.textDecoration = "none";
            div.style.color= "black";
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (li.id == id) {
            list.removeChild(li);
            // div.style.textDecoration = "line-through";
            // localStorage.clear();
            // sessionStorage.clear();
        }
    });

    modifyBtn.addEventListener("click", function () {
        if (li.id == id) {
            let message1 = prompt("Please enter a Reminder");
            let id = Math.floor(Math.random() * 100);
            let reminder1 = createReminder(id, message1);
            let str1 = reminder1.textContent;
            str1 = str1.substring(0, str1.length - 25);
            div.innerText = str1;
        }
    });

    // Append the button for actions
    actionContainer.appendChild(modifyBtn);
    actionContainer.appendChild(disableBtn);
    actionContainer.appendChild(enableBtn);
    actionContainer.appendChild(deleteBtn);
    
    // Append all the elements in Li
    li.appendChild(div);
    li.appendChild(actionContainer);

    return li;
}




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

    displayReminders();
  
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

//   deleteBtn.addEventListener("click", function () {
//     if (li.id == id) {
//       reminderList.removeChild(reminderItem);
        
//     }
// });

  



  











  