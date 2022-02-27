let time = document.getElementById('time');
let dmy=document.getElementById('day');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   


setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var tday=date.getDate();
    var day=date.getDay();
    var month=date.getMonth();
    var year=date.getFullYear();

    let ap;
    if (hour >= 12) {
        ap = "PM";
    }
    else {
        ap = "AM";
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    if (hour == 0) {
        hour = 12;
    }

    if (second < 10) {
        second = "0" + second;

    }
    if (minute < 10) {
        minute = "0" + minute;
    }

    dmy.innerHTML=`<span>${week[day]} ${tday} ${months[month]}  ${year}</span> |`;
    time.innerHTML = ` <span>${hour}:${minute}:${second} ${ap}</span>`;

}, 1000);
