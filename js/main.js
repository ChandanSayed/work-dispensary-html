const timeContainer = document.querySelector('.time');
const lotOne = document.querySelector('.lot1 tbody');
console.log(lotOne);
const d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hour = d.getHours();
let minute = d.getMinutes();
let sec = d.getSeconds();
if (month <= 9) {
  month = `0` + month;
}
if (date <= 9) {
  date = `0` + date;
}
if (hour <= 9) {
  hour = `0` + hour;
}
if (minute <= 9) {
  minute = `0` + minute;
}
if (sec <= 9) {
  sec = `0` + sec;
}
setInterval(() => {
  d;
}, 1000);

const html = `Date: ${date}/${month}/${year} <span className="secondary-color">(${hour}:${minute}:${sec})</span>`;

timeContainer.insertAdjacentHTML('beforeend', html);
function selfCalled() {}
selfCalled();
