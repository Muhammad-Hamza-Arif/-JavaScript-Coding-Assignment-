let usernames = ['admin', 'sajid', 'rhamza', 'zain', 'talha'];

usernames.forEach(function f(element) {
    if(element === 'admin'){
        console.log(`Hello admin, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${element}, thank you for logging in again.`)
    }
});