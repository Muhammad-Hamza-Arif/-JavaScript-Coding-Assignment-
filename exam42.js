function show_magicians(magicians_name){
    magicians_name.forEach(function f(element) {
        console.log(element);
    });
}

function make_great(magician_name) {
    let index = 0
    magician_name.forEach(function f(element) {
        magician_name[index] = `The Great ${element}`;
        ++index;
    });

    show_magicians(magician_name);
}

make_great(["Magician Sajid", "Magician Talha", "Magician Hamza", "Magician Zain"]);