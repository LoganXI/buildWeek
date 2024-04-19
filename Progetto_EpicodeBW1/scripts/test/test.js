

const totalTime = 30; // Ad esempio, 30 seconds
const progress = document.querySelector('.timer-circle-progress');
const label = document.querySelector('.secondi');
const updateInterval = 1000;
   let totalRadius = 360;
let circ = (47 * 2) * Math.PI;// utilizzo il raggio preso dal html e sommo meta dello spessore del circle per avere un totale dello spazio
const increment = circ / totalTime;

//   const increment = 360 / totalTime;
let timeLeft = totalTime;

function updateTimer() {
    console.log(totalRadius);
    progress.style.strokeDashoffset = totalRadius;

    // circ = circ - increment;
    totalRadius = totalRadius - increment;
    label.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        label.textContent = 'Tempo scaduto';
    }
}

var timerInterval = setInterval(updateTimer, updateInterval);


