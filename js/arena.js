export default class Arena {
    
    constructor(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];}


    addGladiator(gladiator) {
    if (this.gladiators.length <= 2){
    this.gladiators.push(gladiator);}
    
    else {
    return 'More than 2 Gladiators in the Arena!';}}
    

    fight() {
    
    if(this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear" || this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club" || this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident"){
        return `${this.gladiators[0].name} Won!`;

    }
    else if(this.gladiators[1].weapon == "Trident" && this.gladiators[0].weapon == "Spear" || this.gladiators[1].weapon == "Spear" && this.gladiators[0].weapon == "Club" || this.gladiators[1].weapon == "Club" && this.gladiators[0].weapon == "Trident"){
        return `${this.gladiators[1].name} Won!`;

    }
    else{
        return 'Both are eliminated';
    }}}