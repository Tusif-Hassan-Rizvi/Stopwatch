let time = document.getElementById('time');
let dmy = document.getElementById('day');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let tday = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

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

    dmy.innerHTML = `<span>${week[day]} ${tday} ${months[month]}  ${year}</span> |`;
    time.innerHTML = ` <span>${hour}:${minute}:${second} ${ap}</span>`;

}, 1000);
