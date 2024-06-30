let currValue = '';
let prevValue = '';
let op = '';
let result;

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
			operate(prevValue, currValue);
		})
	})
})

//functions
//mathematical operations
function add(num1, num2){
	return num1 + num2
}
function subtract(num1, num2){
	return num1 - num2
}
function multiply(num1, num2){
	return num1 * num2
}
function divide(num1, num2){
	if (num2 === 0){
		alert("division by zero is not possible");
	}
	else{
		return num1 / num2
	}
}
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
function operate(op, num1, num2){
	switch(op){
		case '+':
			result = add(num1, num2);
			break;
		case '-':
			result = subtract(num1, num2);
			break;
		case '*':
			result = multiply(num1, num2);
			break;
		case '/':
			result = divide(num1, num2);
			break;
		default:
			alert("invalid operator");
	}
	return result;
}
