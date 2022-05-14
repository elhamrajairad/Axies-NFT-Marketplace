//timer

setInterval(myTime, 1000);
function myTime() {
  let myDate = new Date();
  document.querySelectorAll(".timer").forEach(function (i) {
    i.textContent = myDate.toLocaleTimeString();
  });
}
