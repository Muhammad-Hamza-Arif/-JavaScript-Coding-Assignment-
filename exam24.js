let name = "Hamza";
console.log(name == "Hamza");//True
console.log(name != "Hamza");//False

console.log(name.toLowerCase() == "hamza");//True
console.log(name.toLowerCase() != "hamza");//False

let a = 10;
let b = 20;
console.log(a == b);//False
console.log(a != b);//True
console.log(a > b);//False
console.log(a < b);//True
console.log(a >= b);//False
console.log(a <= b);//True

let num1 = 100;
let num2 = 200;
console.log(num1 > 200 && num2 < 100 ? "True" : "False");
console.log(num1 > 20 || num2 < 30 ? "True" : "False");

let array = [1, 2, 3, 4, 5];
console.log(array.includes(20));//False
console.log(array.includes(3));//True