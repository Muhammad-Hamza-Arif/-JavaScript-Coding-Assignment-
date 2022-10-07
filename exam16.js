let guests = ["Zaid", "Zain", "Waleed"];

guests.forEach(function f(elements) {
    console.log(`Mr ${elements} please come to dinner party`);
})

console.log(`Mr ${guests[0]} can't come to dinner party`);

guests[0] = "sajid";

guests.forEach(function f(elements) {
    console.log(`Mr ${elements} please come to dinner party`);
})

console.log("You found a bigger dinner table for our guests.")

guests.unshift("Abubakar");

let num = Math.ceil(guests.length / 2)
console.log(guests.splice(num, 0, "Talha"))

guests.push("Zohaib");

guests.forEach(function f(elements) {
    console.log(`Mr ${elements} please come to dinner party`);
})