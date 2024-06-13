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
		if(property === undefined){
			return true
		}
		else {
			return false
		}
	}
}