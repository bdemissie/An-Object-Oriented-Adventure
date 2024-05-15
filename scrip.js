// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
//     Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.

class Adventurer {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    roll() {
        return Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
    }

    attack(other) {
        const damage = 1; // Fixed damage for this implementation
        other.health -= damage;
        console.log(`${this.name} attacks ${other.name} reducing health by ${damage}. Current health: ${other.health}`);
    }

    duel(other) {
        console.log(`${this.name} starts a duel with ${other.name}!`);
        while (this.health > 50 && other.health > 50) {
            const roll1 = this.roll();
            const roll2 = other.roll();
            console.log(`${this.name} rolls ${roll1}, ${other.name} rolls ${roll2}`);

            if (roll1 > roll2) {
                this.attack(other);
            } else if (roll2 > roll1) {
                other.attack(this);
            } // In case of a tie, no one attacks

            console.log(`${this.name}: ${this.health}, ${other.name}: ${other.health}`);
        }

        const winner = this.health > 50 ? this.name : other.name;
        console.log(`${winner} wins the duel with health above 50!`);
        return winner;
    }
}

// Example usage
const adventurer1 = new Adventurer("Alice", 100, 15);
const adventurer2 = new Adventurer("Bob", 100, 10);

const winner = adventurer1.duel(adventurer2);
console.log(`The winner is ${winner}!`);



// Key Points:
// roll() Method: Generates a random roll between 1 and 100 for the dueling mechanics.
//     duel() Method:
// Each round, both adventurers roll to determine who attacks.
// The adventurer with the higher roll attacks, reducing the opponent's health by 1.
// Logs include each roll and the current health after each attack.
// The duel continues until one of the adventurer's health drops to 50 or below.
// The winner(the one with health still above 50) is logged at the end.





















// {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.inventory = [];
//     }

//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//     }
// }

// class Adventurer extends Character {
//     constructor(name, role) {
//         super(name);
//         this.role = role;
//         this.inventory.push("bedroll", "50 gold coins");
//     }

//     scout() {
//         console.log(`${this.name} is scouting ahead...`);
//         super.roll();
//     }
// }

// class Companion extends Character {
//     constructor(name, type) {
//         super(name);
//         this.type = type;
//     }
// }

// const robin = new Adventurer("Robin", "Warrior");
// robin.inventory = ["sword", "potion", "artifact"];

// const leo = new Companion("Leo", "Cat");
// leo.companion = new Companion("Frank", "Flea");
// leo.companion.inventory = ["small hat", "sunglasses"];

// robin.roll(); // Example output: Robin rolled a 15.
// leo.roll();






