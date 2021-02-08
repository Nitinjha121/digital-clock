"use strict"

const hours= document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const btnWatch = document.querySelector(".btn-watch");
const btnStopwatch = document.querySelector(".btn-stopwatch");
const btnTimer = document.querySelector(".btn-timer");
const bodyWatch =document.querySelector(".watch");
const bodyStopwatch = document.querySelector(".stopwatch");
const bodyTimer = document.querySelector(".timer");
const btnStart = document.querySelector(".btn-start");
const btnStop= document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");
const stopMinute = document.querySelector(".stop-minutes");
const stopSecond = document.querySelector(".stop-seconds");
const stopMilisecond = document.querySelector(".stop-miliseconds");
const timerHours = document.querySelector(".timer-hours");
const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");
const btnStartTimer = document.querySelector(".btn-start-timer");
const btnStopTimer = document.querySelector(".btn-stop-timer");
const btnResetTimer = document.querySelector(".btn-reset-timer");

const watch = function(){
    const timer= new Date();

    console.log(timer.getHours(),timer.getMinutes(),timer.getSeconds());
    hours.innerHTML=timer.getHours();
    minutes.innerHTML=timer.getMinutes();
    seconds.innerHTML=String(timer.getSeconds());
}
setInterval(watch, 1000);


let time= 0;
const stopwatch = function() {
    

    btnStart.classList.add("hidden");
    btnStop.classList.remove("hidden");
    btnReset.classList.remove("hidden");

const container = setInterval(innerStopwatch, 17);

    function innerStopwatch(){
        
    const stopwatchFastSecond=`${time%100}`.padStart(2, '0');
    const stopwatchSecond=`${Math.floor(time/60)} .`.padStart(4, '0');
    const stopwatchMinute=`${Math.floor(time/3600)} :`.padStart(4, '0');

    console.log(stopwatchSecond, stopwatchMinute);
    
    stopMinute.innerHTML=stopwatchMinute;
    stopSecond.innerHTML=stopwatchSecond;
    stopMilisecond.innerHTML=stopwatchFastSecond;

    time++;
    }

    btnStop.addEventListener("click", () => {
        clearInterval(container);
        btnStart.classList.remove("hidden");
        btnStart.classList.remove("btn-large");
        btnReset.classList.add("hidden");
        // innerStopwatch()
    })
    btnReset.addEventListener("click", () => {
        btnStart.classList.remove("hidden");
        btnStart.classList.add("btn-large");
        btnStop.classList.add("hidden");
        btnReset.classList.add("hidden");
        clearInterval(container);
        time=0;
        innerStopwatch();
    })
}
//timerHours.value.isFinite()>60 && 
const timer = function() {
    if(timerMinutes.value.isFinite()>60 && timerSeconds.value.isFinite()>60 ) {
        const timer=timerMinutes.value;
        const timerSeconds2 = timerSeconds.value;
        
        // timerSeconds2--;
        
    }
}

function activeBody(first, second, third){

    first.classList.add("hidden");
    second.classList.add("hidden");
    third.classList.remove("hidden");

    first.classList.remove("active-body");
    second.classList.remove("active-body");
    third.classList.add("active-body");
}

function activeBtn (first, second, third) {

    first.classList.remove("active")
    second.classList.remove("active")
    third.classList.add("active")
}

const callWatch=function() {
    activeBody(bodyStopwatch, bodyTimer, bodyWatch);
    activeBtn(btnStopwatch, btnTimer, btnWatch);
}

const callStopwatch=function() {
    activeBody(bodyWatch, bodyTimer, bodyStopwatch);
    bodyStopwatch.classList.remove("active-body")
    activeBtn(btnWatch, btnTimer, btnStopwatch);
}

const callTimer=function() {
    activeBody(bodyWatch, bodyStopwatch, bodyTimer);
    bodyTimer.classList.remove("active-body")
    activeBtn(btnWatch, btnStopwatch, btnTimer);
}

btnWatch.addEventListener("click", callWatch);

btnStopwatch.addEventListener("click", callStopwatch);

btnStart.addEventListener("click", stopwatch);

btnTimer.addEventListener("click", callTimer);

// btnStartTimer.addEventListener("click", timer);
