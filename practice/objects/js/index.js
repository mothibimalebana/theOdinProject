let user = {
    name: 'John',
    age: 30,
    'likes cars': true,
}

let key = prompt("What do you want to know about the user?", "name");
alert(user[key])