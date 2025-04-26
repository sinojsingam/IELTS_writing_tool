const initialMinutes = document.getElementById("minutes").innerText;
const initialSeconds = document.getElementById("seconds").innerText;
const initialMinutes2 = document.getElementById("minutes2").innerText;
const initialSeconds2 = document.getElementById("seconds2").innerText;

let textTask1 = document.getElementById("text1");
let textTask2 = document.getElementById("text2");

let start_div = document.getElementById("start");
let start_icon = document.getElementById("start-icon");
let pause_icon = document.getElementById("pause-icon");
let reset_timer = document.getElementById("reset-icon");

let start_div2 = document.getElementById("start2");
let start_icon2 = document.getElementById("start-icon2");
let pause_icon2 = document.getElementById("pause-icon2");
let reset_timer2 = document.getElementById("reset-icon2");

let minutes2 = document.getElementById("minutes2");
let seconds2 = document.getElementById("seconds2");

let m2 = parseInt(document.getElementById("minutes2").innerText);
let s2 = parseInt(document.getElementById("seconds2").innerText);

let time_elapsed_t1 = document.getElementById("timer_span");
let time_elapsed_t2 = document.getElementById("timer_span2");
let out_of_time = document.getElementById("out_of_time");
let timer_span = document.getElementById("timer_span");
var startTimer = null;
var startTimer2 = null;
let time_switch = true;
let time_switch2 = true;

function stopTimer() {
  clearInterval(startTimer);
  pause_icon.style.display = "none";
  start_icon.style.display = "inline";
  time_switch = true;
}
function stopTimer2() {
  clearInterval(startTimer2);
  //start_timer2.innerText = "Start";
  pause_icon2.style.display = "none";
  start_icon2.style.display = "inline";
  time_switch2 = true;
};
function times_up(){
  out_of_time.innerText = "Out of time!";
  out_of_time.style.display = "inline";
  timer_span.style.display = "none";
  m = parseInt(initialMinutes);
  s = parseInt(initialSeconds);
  minutes.innerText = initialMinutes;
  seconds.innerText = initialSeconds;
  clearInterval(startTimer);
  textTask1.disabled = true;
  time_switch = true;
  start_div.style.display = "none";
};

function times_up2(){
  out_of_time2.innerText = "Out of time!";
  out_of_time2.style.display = "inline";
  timer_span2.style.display = "none";
  m2 = parseInt(initialMinutes2);
  s2 = parseInt(initialSeconds2);
  minutes2.innerText = initialMinutes2;
  seconds2.innerText = initialSeconds2;
  clearInterval(startTimer2);
  textTask2.disabled = true;
  time_switch2 = true;
  start_div2.style.display = "none";
};

function timer(num) {
  if (num == 1) {
    if (m == 0 && s == 0) {
      times_up();
    } else if (s != 0) {
      s--;
      seconds.innerText = s.toString();
      if (s < 10) {
        seconds.innerText = "0" + s.toString();
      }
    } else if (m != 0 && s == 0) {
      s = 59;
      seconds.innerText = s.toString();
      m--;
      minutes.innerText = m.toString();
    }
  } else {
    if (m2 == 0 && s2 == 0) {
      times_up2()
    } else if (s2 != 0) {
      s2--;
      seconds2.innerText = s2.toString();
      if (s2 < 10) {
        seconds2.innerText = "0" + s2.toString();
      }
    } else if (m2 != 0 && s2 == 0) {
      s2 = 59;
      seconds2.innerText = s2.toString();
      m2--;
      minutes2.innerText = m2.toString();
    }
  }
};

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let m = parseInt(document.getElementById("minutes").innerText);
let s = parseInt(document.getElementById("seconds").innerText);

textTask1.addEventListener("click", () => {
  if (time_switch) {
    function startInterval() {
      startTimer = setInterval(function () {
        timer(1);
        //start_timer.innerText = "Pause";
        pause_icon.style.display = "inline";
        start_icon.style.display = "none";
      }, 1000);
      time_switch = false;
    }
    startInterval();
  }
});

start_div.addEventListener("click", () => {
  if (time_switch) {
    function startInterval() {
      startTimer = setInterval(function () {
        timer(1);
        //start_timer.innerText = "Pause";
        pause_icon.style.display = "inline";
        start_icon.style.display = "none";
      }, 1000);
      time_switch = false;
    }
    startInterval();
  } else {
    stopTimer();
  }
});
reset_timer.addEventListener("click", () => {
  out_of_time.style.display = "none";
  timer_span.style.display = "inline";
  minutes.innerText = initialMinutes;
  seconds.innerText = initialSeconds;
  m = parseInt(initialMinutes);
  s = parseInt(initialSeconds);
  textTask1.disabled = false;
  textTask1.value = "";
  start_div.style.display = "inline";
  stopTimer();
});
/* ************************************** */
textTask2.addEventListener("click", () => {
  if (time_switch2) {
    function startInterval() {
      startTimer2 = setInterval(function () {
        timer(2);
        //start_timer2.innerText = "Pause";
        pause_icon2.style.display = "inline";
        start_icon2.style.display = "none";
      }, 1000);
      time_switch2 = false;
    }
    startInterval();
  }
});

start_div2.addEventListener("click", () => {
  if (time_switch2) {
    function startInterval() {
      startTimer2 = setInterval(function () {
        timer(2);
        //start_timer2.innerText = "Pause";
        pause_icon2.style.display = "inline";
        start_icon2.style.display = "none";
      }, 1000);
      time_switch2 = false;
    }
    startInterval();
  } else {
    stopTimer2();
  }
});
reset_timer2.addEventListener("click", () => {
  out_of_time2.style.display = "none";
  timer_span2.style.display = "inline";
  minutes2.innerText = initialMinutes2;
  seconds2.innerText = initialSeconds2;
  m2 = parseInt(initialMinutes2);
  s2 = parseInt(initialSeconds2);
  textTask2.disabled = false;
  textTask2.value = "";
  start_div2.style.display = "inline";
  stopTimer2();
});
/* ************************************** */


let dlButton = document.getElementById("print-button");

let words1 = document.getElementById("current");
let words2 = document.getElementById("current2");

function diff(elapsed, totalTime) {
  elapsed = elapsed.split(":");
  totalTime = totalTime.split(":");
  var elapsedDate = new Date(0, 0, 0, 0, elapsed[0], elapsed[1], 0);
  var totalDate = new Date(0, 0, 0,0, totalTime[0], totalTime[1], 0);
  var diff = totalDate.getTime() - elapsedDate.getTime();
  var hourscalc = Math.floor(diff / 1000 / 60 / 60);
  diff -= hourscalc * 1000 * 60 * 60;
  var minutescalc = Math.floor(diff / 1000 / 60);
  var secondscalc = Math.floor(diff  / (1000) % 60);

  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hourscalc < 0)
     hourscalc = hourscalc + 24;

  return (minutescalc <= 9 ? "0" : "") + minutescalc + ":" + (secondscalc <= 9 ? "0" : "") + secondscalc;
};

function WriteToFile(f) {
  let time_used = `${minutes.innerText}:${seconds.innerText}`
  let time_total = `${initialMinutes}:${initialSeconds}`
  let elapsed = diff(time_used, time_total);

  let time_used2 = `${minutes2.innerText}:${seconds2.innerText}`
  let time_total2 = `${initialMinutes2}:${initialSeconds2}`
  let elapsed2 = diff(time_used2, time_total2);
  let data = 
  `Task 1:\n------\n${textTask1.value}
  \n****\nTime elapsed: ${((elapsed == "00:00") ? 'Time up!' : elapsed)}\nTime left: ${((elapsed == "00:00") ? 'Time up!' : time_used)}\nTotal Time: ${time_total}
  \nWord Count: ${words1.innerText};\n****
  \nTask 2:\n------\n${textTask2.value}
  \n****\nTime elapsed: ${((elapsed2 == "00:00") ? 'Time up!' : elapsed2)}\nTime left: ${((elapsed2 == "00:00") ? 'Time up!' : time_used2)}\nTotal Time: ${time_total2}
  \nWord Count: ${words2.innerText};\n****\n`;
  
  const textToBLOB= new Blob([data], {type: 'text/plain'});
  const sFileName = f;
  let newLink = document.createElement("a");
  newLink.download = sFileName;
  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  };
  newLink.click();
};

dlButton.addEventListener('click', ()=>{
  let testName = document.getElementById("testname");
  let myFile;
  if (testName.value == "") {
    myFile = "IELTS_writing.txt"
  } else{
    myFile = `${testName.value}.txt`;
  }
  if (textTask1.value == ""){
    alert("Please fill in task 1");
  }else if (textTask2.value == ""){
    alert("Please fill in task 2");
  } else{
    stopTimer();
    stopTimer2();
    WriteToFile(myFile);
    reset_timer.click();
    reset_timer2.click();
    testName.value = ""
  };
})