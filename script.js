let countdownDate = 0;
let countdown = null;

function startCountdown() {
  if (countdown) {
    clearInterval(countdown);
  }

  let daysInput = document.getElementById("daysInput").value;
  let hoursInput = document.getElementById("hoursInput").value;
  let minutesInput = document.getElementById("minutesInput").value;
  let secondsInput = document.getElementById("secondsInput").value;

  let now = new Date().getTime();
  countdownDate =
    now +
    daysInput * 24 * 60 * 60 * 1000 +
    hoursInput * 60 * 60 * 1000 +
    minutesInput * 60 * 1000 +
    secondsInput * 1000;

  countdown = setInterval(function () {
    now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Countdown Finished";
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);
  countdown = null;
  document.getElementById("days").innerHTML = "";
  document.getElementById("hours").innerHTML = "";
  document.getElementById("minutes").innerHTML = "";
  document.getElementById("seconds").innerHTML = "";
  document.getElementById("countdown").innerHTML = "";
  document.getElementById("daysInput").value = "";
  document.getElementById("hoursInput").value = "";
  document.getElementById("minutesInput").value = "";
  document.getElementById("secondsInput").value = "";
}

let startButton = document.getElementById("startButton");
startButton.addEventListener("click", startCountdown);
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetCountdown);
