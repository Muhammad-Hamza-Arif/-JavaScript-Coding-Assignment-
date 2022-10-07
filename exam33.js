let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(function f(element) {
    if(element == 1){
        console.log(`\n${element}st`)
    }
    else if(element == 2){
        console.log(`\n${element}nd`)
    }
    else if(element == 3){
        console.log(`\n${element}rd`)
    }
    else{
        console.log(`\n${element}th`)
    }
});