let currValue = '';
let prevValue = '';
let op = '';

document.addEventListener("DOMContentLoaded", () => {
	let C = document.querySelector("#C");
	let numEqauls = document.querySelector("#numEqauls");
	let del = document.querySelector("#del");
	let decimal = document.querySelector("#decimal");

	let numbers = document.querySelectorAll(".numbers");
	let operators = document.querySelectorAll(".operators");

	numbers.forEach((numbers) => {
		numbers.addEventListener("click", () => {
			handleNumbers(numbers.textContent);
		});
	})
})

//functions
function handleNumbers(num){
	console.log(num);
}