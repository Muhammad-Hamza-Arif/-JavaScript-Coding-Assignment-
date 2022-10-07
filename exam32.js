let current_users = ['sajid', 'daniyal', 'hamza', 'zain', 'talha'];

let new_users = ['raza', 'waleed', 'Daniyal', 'farhan', 'SAJID'];

new_users.forEach(function f(element) {
    if(current_users.includes(element.toLowerCase())){
        console.log("The person will need to enter a new username")
    }
    else{
        console.log(`The username "${element}" is available.`);
    }
});