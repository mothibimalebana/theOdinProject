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

//Healer
function Healer(name, level, spell){
    Object.setPrototypeOf(Healer.prototype, Hero.prototype);

    this.spell = spell;
}





let hero1 = new Hero('Bjorn', 1);
let heather = new Healer('Heather', 1, "healer's touch");
