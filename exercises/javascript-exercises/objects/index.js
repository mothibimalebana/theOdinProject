//Hello, object

//Create an empty user
let user = {};
//Add property name with value John
user.name = "John";
//Add the property surname with value Smith
user.surname = "Smith";
//Change value of name to Pete
user.name = "Pete"
//Remove name property from the object
delete user.name;

//Check for emptiness
function isEmpty(obj){
	for(let property in obj){
			return true
		}
			return false
}

//Sum object properties
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

//variables
let sumOfSalaries = 0;

//objects
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

//functions
function sumSalaries(obj){
	for(let salary in obj){
		sumOfSalaries += obj[salary]; 
	}
	return sumOfSalaries
}
console.log(sumSalaries(salaries))