// Assigning the initial values of milliseconds, seconds, minutes and hour as 0, 0, 0, 0 using an array
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

// select the timer in neontext and store it in a local variable as timeRef
let timeRef = document.querySelector(".neonText");

// Let the initial timer as null and it shows that no interval is present or started
let int = null;

// Get the start timer element when its clicked and start running of timer using displayTimer function
// We are using setInterval and clearInterval here. setInterval sets up a recurring timer. 
//It returns a handle that you can pass into clearInterval to stop it from firing:
document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

// Pause timer element when its clicked will stop the timer by executing ClearInterval
document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

// Reset timer element when clicked will first stop the timer using ClearInterval and 
// then sets the latest time to 00 : 00 : 00 : 00
document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

// create a function for the Displaying the Timer
function displayTimer() {
    milliseconds += 10; // increase milliseconds by 10 after each encounter
    //when milliseconds reaches to 1000 change it to 00 and increase the seconds by 1
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        //when seconds reaches to 60, change it to 0 and increase minutes by 1
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            //when minutes reaches to 60, change it to 0 and increase hours by 1
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // if hour is less than 10 add a 0 prior to hours and store it in a local variable for furture use
    let h = hours < 10 ? "0" + hours : hours;
    
    // if minutes is less than 10 add a 0 prior to minutes and store it in a local variable for furture use
    let m = minutes < 10 ? "0" + minutes : minutes;
    
    // if seconds is less than 10 add a 0 prior to seconds and store it in a local variable for furture use
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    // if milliseconds is less than 10 add a 0 prior to milliseconds and store it in a local variable for furture use
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    // display the latest time    
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}