let guests = ["Zaid", "Zain", "Waleed"];

guests.forEach(function f(elements) {
    console.log(`Mr ${elements} please come to dinner party`);
})

console.log(`Mr ${guests[0]} can't come to dinner party`);

guests[0] = "sajid";

guests.forEach(function f(elements) {
    console.log(`Mr ${elements} please come to dinner party`);
})