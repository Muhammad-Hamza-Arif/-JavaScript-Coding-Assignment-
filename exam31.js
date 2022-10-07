let usernames = [];

if(usernames.length == 0){
    console.log("We need to find some users!");
}
else{
    usernames.forEach(function f(element) {
    if(element === 'admin'){
        console.log(`Hello admin, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${element}, thank you for logging in again.`)
    }
});
}