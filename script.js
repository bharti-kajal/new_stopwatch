let seconds = 0;
let timer;

// Stopwatch Start Function 
function start() {
    timer = setInterval(function() {
        seconds++;
        update();
    }, 500);
}

// Stopwatch Stop Function 
function stop() {
    clearInterval(timer);
}

// Stopwatch Reset Function
function reset() {
    clearInterval(timer);
    seconds = 0;
    update();
}

//update 
function update() {
    const minutes = Math.floor(seconds / 60);
    const showSeconds = seconds % 60;
    const timeDiv = document.getElementById('time');
    timeDiv.innerText = (minutes < 10 ? '0' : '') + minutes + ':' + (showSeconds < 10 ? '0' : '') + showSeconds;
}

// Event listeners for the actions
document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);

// Initialize display
update();
