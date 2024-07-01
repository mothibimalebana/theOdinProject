/**Variables */
let currValue = '';
let prevValue = '';
let op = '';
let result;

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