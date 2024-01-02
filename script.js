window.onload = function() {
  let dayBox = document.getElementById("day-box");
  let hrBox = document.getElementById("hr-box");
  let minBox = document.getElementById("min-box");
  let secBox = document.getElementById("sec-box");
  let endDate = new Date(2024, 0, 1, 0, 0, 0); // New Year's Day 2024
  let endTime = endDate.getTime();
  let i;

  function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

    if (endTime < todayTime) {
      clearInterval(i);
      document.querySelector(".countdown").innerHTML = "<h1>Bye 2023, Welcome 2024! I hope for a great year ahead.</h1>";
      document.querySelector(".message").innerHTML = "<h2>I hope that in 2024 I will be a better me than before.</h2>";
    } else {
      let daysLeft = Math.floor(remainingTime / oneDay);
      let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
      let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
      let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

      dayBox.textContent = addZeroes(daysLeft);
      hrBox.textContent = addZeroes(hrsLeft);
      minBox.textContent = addZeroes(minsLeft);
      secBox.textContent = addZeroes(secsLeft);
    }
  }

  i = setInterval(countdown, 1000);
  countdown();
};