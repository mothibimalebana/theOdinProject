function isEmpty(obj){
	for(let property in obj){
		return false
	}
	return true
}
let schedule = {};

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // true