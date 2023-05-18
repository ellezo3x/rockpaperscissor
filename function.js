const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const choices = ["rock", "paper", "scissors"];

rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

let youScore = 0;
let computerScore = 0;

function playGame(event) {
	const youChoice = event.target.id;
	const randomNum = Math.floor(Math.random() * 3);
	const computerChoice = choices[randomNum];
	let winner;
	if (youChoice === computerChoice) {
		winner = "Tie";
	} else if (
		(youChoice === "rock" && computerChoice === "scissors") ||
		(youChoice === "paper" && computerChoice === "rock") ||
		(youChoice === "scissors" && computerChoice === "paper")
	) {
		winner = "You";
		youScore += 1;
	} else {
		winner = "Computer";
		computerScore += 1;
	}
	resultDiv.innerHTML = `You choose ${youChoice}, computer choose ${computerChoice}. ${winner} wins!`;
	alert(`You choose ${youChoice}, computer choose ${computerChoice}. ${winner} wins!`);
	document.getElementById("you-score").innerHTML = Math.round(youScore);
	document.getElementById("computer-score").innerHTML = Math.round(computerScore);
}