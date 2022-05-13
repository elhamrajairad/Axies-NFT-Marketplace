//timer

setInterval(myTime, 1000);
function myTime() {
  let myDate = new Date();
  document.querySelector(".timer").textContent = myDate.toLocaleTimeString();
}