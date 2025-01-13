const homeScoreEl = document.getElementById("homeScoreEl");
const awayScoreEl = document.getElementById("awayScoreEl");
const homeContainer = document.querySelector('.homeContainer');
const awayContainer = document.querySelector('.awayContainer');
let homeScore = 0;
let awayScore = 0;

function addPoints(e) {
    const pointValues = {
        onePoint: 1,
        twoPoint: 2,
        threePoint: 3,
    };
    for (const [key, value] of Object.entries(pointValues)) {
        if (e.target.classList.contains(key)) {
            const isHomeScore = e.target.closest('#homeScoreBtns');
            if (isHomeScore) {
                homeScoreEl.textContent = homeScore += value;
            } else {
                awayScoreEl.textContent = awayScore += value;
            }
        }
    }
    isWinning();
}

const winningEl = document.createElement('p');
const winningElContainer = document.querySelector('.winningElContainer');
winningEl.textContent = " ";
winningEl.classList.add("winningEl");

function isWinning() {
    if (homeScore > awayScore) {
        winningElContainer.appendChild(winningEl).textContent = "Winning: HOME team";
    } else if (awayScore > homeScore) {
        winningElContainer.appendChild(winningEl).textContent = "Winning: AWAY team";
    } else {
        winningEl.textContent = "Winning: Tied";
    }
}

function newGame() {
    winningEl.textContent = " ";
    homeScoreEl.textContent = homeScore = 0;
    awayScoreEl.textContent = awayScore = 0;
    if (homeContainer.contains(winningEl)) {
        homeContainer.removeChild(winningEl);    
    }
    if (awayContainer.contains(winningEl)) {
        awayContainer.removeChild(winningEl);
    }
}
