/**Variables */
let currValue = '';
let prevValue = '';
let op = '';
let result;

let inputScreen = document.querySelector(".inputScreen")

let numbers = document.querySelectorAll(".numbers");
numbers.forEach((numbers) => {
	numbers.addEventListener("click", () => displayNumber(numbers.textContent))
})
let operators = document.querySelectorAll(".operators");
operators.forEach((operators) => {
	operators.addEventListener("click", () => displayNumber(operators.textContent))
})
//dry

/**Functions */
//mathematical operands
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
	return num1 / num2
}

function displayNumber(num){
	currValue += num;
	inputScreen.textContent = currValue;

	if (num == "+"){
		inputScreen.textContent = '';
		currValue = prevValue;
	}
}
//operate function
function operate(op, num1, num2){
	switch(op){
		case '+':
			result = add(num1, num2);
			console.log(result);
			break;
		case '-':
			result = subtract(num1, num2);
			console.log(result);
			break;
		case '*':
			result = multiply(num1, num2);
			console.log(result);
			break;
		case '/':
			result = divide(num1, num2);
			console.log(result);
			break;
	}
}