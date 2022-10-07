
function titleCase(name) {
    let $name = name.split(" ");
    let finalName = new Array;
    $name.forEach(element => {
        finalName.push(element[0].toUpperCase() + element.slice(1));
    });
    return finalName.join(" ");
}

let name = "Muhammad Hamza";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(titleCase(name));