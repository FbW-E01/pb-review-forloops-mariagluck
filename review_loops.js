// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

// 2. Make a loop that prints the numbers from 10 to 20.
for (let i = 10; i <= 20; i++) {
    console.log(i);
    
}

// 3. Make a loop that prints the numbers from -10 to 10.
for (let i = -10; i <= 10; i++) {
    console.log(i);
    
}

// 4. Make a loop that prints the numbers from 10 to -10.
for (let i = 10; i >= -10; i--) {
    console.log(i);
    
}

// 5. Make a string. Then, make a loop that prints all the individual characters of that string.

const myString = "Red is greener than purple, for sure.";

for (let i = 0; i < myString.length; i++) {
    const letter = myString[i];
    console.log(letter);
    
}

// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const moods = ["😀", "😉", "😑", "😭", "😡"];

for (let i = 0; i < moods.length; i++) {
    const mood = moods[i];
    console.log(mood);
    
}

// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const food = [ "🍉", "🍞", "🍕", "🍩", "🍝", "🌮"];

for (let i = 1; i < food.length; i+=2) {
    const lunch = food[i];
    console.log(lunch);
    
}
// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

const drinks = ["🧉", "🍷", "🍼", "🍺", "🍾", "🥛" ];

for (let i = 2; i < drinks.length; i+=3) {
    const drink = drinks[i];
    console.log(drink);
}
// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.

const greetings = [ "🖖", "🙌", "🖐", "🤘", "🤛", "🤝", "🤙", "👋", "👊", "👐"];

for (let i = 1; i < greetings.length; i+=3) {
    const greet = greetings[i];
    console.log(greet);
    
}
// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const users = [
    { counter: 1, username: "Gina",    role: "magician"},
    { counter: 2, username: "Kadin",   role: "bank robber"},
    { counter: 3, username: "Isabell", role: "super heroine"},
    { counter: 4, username: "Ramiro",  role: "body builder"},
    { counter: 5, username: "Anita",   role: "animal trainer"},
    { counter: 6, username: "Markus",  role: "refree"},
    { counter: 7, username: "Rodrick", role: "fairy"},
]
for (let i = 0; i < users.length; i++) {
    console.log(users[i].counter);
    
}


// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

const wholeRandomNum = Math.floor(Math.random() * 101);

for (let i = 0; i <= 100; i++) {
    if (wholeRandomNum === i) {
        break;
    }
    console.log(i);
}
