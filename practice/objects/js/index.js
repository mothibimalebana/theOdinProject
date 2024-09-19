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
    Hero.call(this, name, level)

    this.weapon = weapon;
}

//Healer
function Healer(name, level, spell){
    Hero.call(this, name, level);

    this.spell = spell;
}





let hero1 = new Hero('Bjorn', 1);

