document.getElementById("delete-submit").onclick = function() {
    deleteReminder();
};
document.getElementById("submit").onclick = function () {
	addReminder();
}
document.getElementById("add").onclick = function() {
    document.getElementById("add-Reminder").style.display = "block";
    document.getElementById("reminders").style.display = "none";
    document.getElementById("delete-Reminder").style.display = "none";
};

document.getElementById("get").onclick = function() {
    showReminders();
    document.getElementById("add-Reminder").style.display = "none";
    document.getElementById("delete-Reminder").style.display = "none";
};

document.getElementById("delete").onclick = function() {
    document.getElementById("delete-Reminder").style.display = "block";
    document.getElementById("reminders").style.display = "none";
    document.getElementById("add-Reminder").style.display = "none";
    showReminders();
};

function addReminder() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var reminder = {
        title: title,
        description: description,
    };
    var reminders = JSON.parse(localStorage.getItem("reminders"));
    if (reminders == null) {
        reminders = [];
    }
    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));
    alert("Reminder added successfully");
    window.location.href = "index.html";
}

function showReminders() {
    if (document.getElementById("reminders").style.display == "none") {
        document.getElementById("reminders").style.display = "block";
    }
    var reminders = JSON.parse(localStorage.getItem("reminders"));
    if (reminders == null) {
        reminders = [];
    }
    var html = "";
    for (var i = 0; i < reminders.length; i++) {
        var reminder = reminders[i];
        html += '<div class="reminder">';
        html += "<h2>" + i + ". " + reminder.title + "</h2>";
        html += "<p>" + reminder.description + "</p>";
        html += "</div>";
    }
    if (reminders.length == 0) {
        html += "<h2>No reminders</h2>";
    }
    document.getElementById("reminders").innerHTML = html;
}

function hideReminders() {
    document.getElementById("reminders").style.display = "none";
}

function deleteReminder() {
    var reminders = JSON.parse(localStorage.getItem("reminders"));
    if (reminders == null) {
        reminders = [];
    }
    var index = document.getElementById("id").value;
    reminders.splice(index, 1);
    localStorage.setItem("reminders", JSON.stringify(reminders));
    alert("Reminder deleted successfully");
    window.location.href = "index.html";
}
