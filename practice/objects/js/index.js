//Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;

}
Hero.prototype.greet = function() {
    return `${this.name} says hello`;
}

//Warrior
function Warrior(name, level, weapon) {
    Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

    this.weapon = weapon;
}
Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}
//Healer
function Healer(name, level, spell){
    Object.setPrototypeOf(Healer.prototype, Hero.prototype);

    this.spell = spell;
}
Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}.`;
}




let hero1 = new Hero('Bjorn', 1);
let heather = new Healer('Heather', 1, "healer's touch");
