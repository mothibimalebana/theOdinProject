function makeUser(name, age) {
    return{
        name,
        age,
    };
}

let user = makeUser("John", 30);
alert(user.name);