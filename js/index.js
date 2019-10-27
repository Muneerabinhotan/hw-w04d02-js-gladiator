import Gladiator from './gladiator.js';
import Arena from './arena.js';



const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"


const colosseum1 = new Arena("Colosseum");
console.log(colosseum1.name);

const colosseum2 = new Arena("megalopolis");
console.log(colosseum2.name); // => Megalopolis

const colosseum3 = new Arena("Colosseum");
console.log(colosseum3.gladiators); // => []

const max1 = new Gladiator("Maximus","Trident");
const colosseum4 = new Arena("Colosseum");
colosseum4.addGladiator(max);
console.log(colosseum4.gladiators); // => [Gladiator]

const max2 = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum5 = new Arena("Colosseum");

colosseum5.addGladiator(max);
colosseum5.addGladiator(titus);
colosseum5.addGladiator(andronicus);

console.log(colosseum5.gladiators.length); // => 2

const max3 = new Gladiator("Maximus","Trident");
const titus1 = new Gladiator("Titus","Spear");
const colosseum6 = new Arena("Colosseum");

colosseum6.addGladiator(max);
colosseum6.addGladiator(titus);
colosseum6.fight();

console.log(colosseum6.gladiators); // => [max]