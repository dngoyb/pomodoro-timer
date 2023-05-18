const timerEl = document.getElementById('timer');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const btnEl = document.querySelectorAll('.btn');

let interval;
let timeLeft = 10;
let mainTime = timeLeft;

function addAndRemoveActive(element) {
	btnEl.forEach((btn) => {
		btn.classList.remove('active');
	});
	element.classList.add('active');
}

function formatTime(time) {
	return time.toString().padStart(2, 0);
}

function formattedOutput() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	timerEl.innerHTML = `${formatTime(minutes)} : ${formatTime(seconds)}`;
}
function handleStart() {
	handleStop();
	addAndRemoveActive(startEl);
	interval = setInterval(() => {
		if (timeLeft < 1) return;
		timeLeft--;
		formattedOutput();
	}, 1000);
}

function handleStop() {
	addAndRemoveActive(stopEl);
	clearInterval(interval);
}

function handleReset() {
	addAndRemoveActive(resetEl);
	handleStop();
	timeLeft = mainTime;
	formattedOutput();
}

startEl.addEventListener('click', handleStart);
stopEl.addEventListener('click', handleStop);
resetEl.addEventListener('click', handleReset);
