//Variables
let currentValue = '';
let previousValue = '';
let op = '';

let inputScreen = document.querySelector(".inputScreen");
let eqauls = document.querySelector("#numEqauls");
let comma = document.querySelector("#decimal");

document.addEventListener("DOMContentLoaded", () => {
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let C = document.querySelector("#C");

//Display Screen
numbers.forEach((numbers) => {
	numbers.addEventListener("click", () => displayNumbers(numbers.textContent))
});

comma.addEventListener("click", () => displayNumbers(comma.textContent))

operators.forEach((operators) => {
	operators.addEventListener('click', () =>  {
		operatorClicked(operators.textContent);
		num2 = operate(op, previousValue, Number(currentValue));
		currentValue = num2;	
	});
})

C.addEventListener('click', () => {
	clearScreen();
	currentValue = '';
	previousValue = '';
	op = '';
});
})


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
			break;
		case '-':
			subtract(num1, num2);
			break;
		case '*':
			multipy(num1, num2);
			break;
		case '/':
			divide(num1, num2);
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
function operatorClicked(operator){
	op = operator;
	previousValue = Number(currentValue);
	currentValue = ''
}

