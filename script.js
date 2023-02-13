
let [hours,minutes,seconds] = [0,0,0];
let time = document.getElementById('time');

//start button
let start = document.getElementById('start');
start.addEventListener('click',timerStart);

//pause button
let pause = document.getElementById('pause');
pause.addEventListener('click',timerStop);

//reset button
let reset = document.getElementById('reset');
reset.addEventListener('click',timerReset);

let index=null;

function timer(){
    seconds++;
    if(seconds == 60) {
        seconds =0;
        minutes += 1;
        if(minutes == 60){
            minutes = 0;
            hours += 1;
        }
    }
    time.innerHTML = hours +" hrs: "+minutes+" mins: "+seconds+"secs";
}

function timerStart(){
    if(index != null){
        clearInterval(index);
    }
    index = setInterval(timer,1000);
}

function timerStop(){
    clearInterval(index);
}

function timerReset(){
    clearInterval(index);
    seconds =0;
    minutes=0;
    hours=0;
    time.innerHTML = hours +" hrs: "+minutes+" mins: "+seconds+"secs";
}
