let currValue = '';
let prevValue = '';
let op = '';

document.addEventListener("DOMContentLoaded", () => {
	let C = document.querySelector("#C");
	let numEqauls = document.querySelector("#numEqauls");
	let del = document.querySelector("#del");
	let decimal = document.querySelector("#decimal");
	let inputScreen = document.querySelector(".inputScreen");
	C.addEventListener("click", () => {
	prevValue = '';
	currValue = '';
	op = '';
	inputScreen.textContent = '';
	})
	

	let numbers = document.querySelectorAll(".numbers");
	let operators = document.querySelectorAll(".operators");

	numbers.forEach((numbers) => {
		numbers.addEventListener("click", () => {
			handleNumbers(numbers.textContent);
			inputScreen.textContent = currValue;
		});
	})
	operators.forEach((operators) => {
		operators.addEventListener("click", () => {
			handleOperators(operators.textContent)
			inputScreen.textContent = currValue;
		})
	})
})

//functions
function handleNumbers(num){
	if(currValue.length <= 7){
	currValue += num;
	}
}
function handleOperators(operator){
	op = operator;
	prevValue = currValue;
	currValue = '';
}
function operate(num1, num2){
	currValue = Number(currValue);
	prevValue = Number(prevValue);
}