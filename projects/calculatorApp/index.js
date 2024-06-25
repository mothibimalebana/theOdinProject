//Variables
let previousScreenV, currentScreenValue;
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");

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
			add(num1, num2)
			console.log(num1, num2, add(num1, num2));
	}
}