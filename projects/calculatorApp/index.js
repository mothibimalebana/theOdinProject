//Variables
let currentScreenValue = '';
let previousScreenV = '';
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

//Display Screen
numbers.forEach((numbers) => {
	numbers.addEventListener("click", () => displayNumbers(numbers.textContent))
})
function displayNumbers(num){
	currentScreenValue += num;
	inputScreen.textContent = currentScreenValue;
}