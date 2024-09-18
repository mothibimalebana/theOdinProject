let fruit = prompt("Which fruit do you wanna cop?", "apple")

let bag = {
    [fruit]: 5
};

alert(`${fruit}: ${bag[fruit]}`)