//Variables
let currentValue = '';
let previousValue = '';
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let inputScreen = document.querySelector(".inputScreen");
let C = document.querySelector("#C");
let eqauls = document.querySelector("#numEqauls");
let comma = document.querySelector("#decimal");

//Operator Functions
function add(num1, num2){
	return num1 + num2
}
function subtract(num1, num2){
	return num1 - num2
}
function multipy(num1, num2){
	return num1 * num2
}
function divide(num1, num2){
	return num1 / num2
}

function operate(op, num1, num2){
	switch(op){
		case '+':
			add(num1, num2);
			console.log(num1, num2, add(num1, num2));
			break;
		case '-':
			subtract(num1, num2);
			console.log(num1, num2, subtract(num1, num2));
			break;
		case '*':
			multipy(num1, num2);
			console.log(num1, num2, multipy(num1, num2));
			break;
		case '/':
			divide(num1, num2);
			console.log(num1, num2, divide(num1, num2));
			break;
	}
}

// Functions
function displayNumbers(num){
	currentValue += num;
	inputScreen.textContent = currentValue;
}
function clearScreen(){
	inputScreen.textContent = ''
}
//Display Screen
numbers.forEach((numbers) => {
	numbers.addEventListener("click", () => displayNumbers(numbers.textContent))
})
operators.forEach((operators) => {
	operators.addEventListener('click', operatorClicked(operators.textContent))
})