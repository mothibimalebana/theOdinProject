let sum = 0;

function sumObject(obj){
	for(let properties in obj){
		sum +=(obj[properties])
	}
	console.log(sum)
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
sumObject(salaries);