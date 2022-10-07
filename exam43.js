function show_magicians(magicians_name){
    magicians_name.forEach(element => {
        console.log(element);
    });
}

function make_great(magician_name) {
    let index = 0
    magician_name.forEach(element => {
        magician_name[index] = `The Great ${element}`;
        ++index;
    });

    return magician_name;
}

let magician = ["Magician Sajid", "Magician Talha", "Magician Hamza", "Magician Zain"];

let magician_copy = [magician];

let great_magician = make_great(magician_copy);

show_magicians(magician);
console.log(show_magicians(great_magician));