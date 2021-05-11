var inputName = document.getElementById("myName");

function showName() {
    var promptName = prompt("Enter the your name");
    if(promptName === '' || promptName === null) {
        alert("You Have To Enter Your Name. Please Reload The Page !!!");
    }
    else {
        inputName.innerHTML = promptName;
    }
}

function showTime() {
    var setDate = new Date();
    var hours = setDate.getHours();
    var minutes = setDate.getMinutes();
    var seconds = setDate.getSeconds();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if(hours >= 12) {
        document.getElementById('amPm').innerHTML = "PM";
    }
    else {
        document.getElementById('amPm').innerHTML = "AM";
    }

    if(hours > 12) {
        hours = hours - 12;
    }

    if(hours < 10) {
        hours = "0" + hours;
    }else {
        hours = hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes; 
    }else {
        minutes = minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds; 
    }else {
        seconds = seconds;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('seconds').innerHTML = minutes;
    document.getElementById('minutes').innerHTML = seconds;
    document.getElementById('day').innerHTML = days[setDate.getDay()];


    setTimeout(showTime, 1000);
}
showTime();