function sandwich(items) {
    console.log("Welcome to my Sandwich Shop");
    console.log("I will make a great sandwich for you. Tell me about the additional items that you want add on a sandwitch. Your additional items are:")

    items.forEach(function f(element) {
        console.log(`+ ${element}`)
    });
}

sandwich(["Cheese", "Olive Oil", "Cabbage", "Tikka"]);
sandwich(["Pepperoni", "Mushrooms", "Onions"]);
sandwich(["Black Pepper", "Egg York", "Black Olives", "Cheese", "Mustard Sauce", "Butter"]);