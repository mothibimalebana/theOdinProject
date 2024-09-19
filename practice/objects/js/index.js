function Hero(name, level) {
    this.name = name;
    this.level = level;

}
Hero.prototype.greet = function() {
    return `${this.name} says hello`;
}
let hero1 = new Hero('Bjorn', 1);

