
// let message = "Hello, World"; // declaring a string variable

// message = 9007199254740991; // the largest posssible natural number supported

// // big integer, for supporting large numbers
// let bigInt = 123456789123456789123456789n;

// let boolValue = true; // true/false booleans
// let nullableValue = null; // things with no value
// let undefinedVar = undefined;

// console.log(message, "from hello.js");

// console.log(typeof message);
// console.log(typeof bigInt);
// console.log(typeof boolValue);
// console.log(typeof nullableValue);
// console.log(typeof undefinedVar);

console.log("this is a string");
console.log('this is also a string');

let type = "string";

console.log(`this is a cool way to play with a ${type}`);

console.log("this is the wrong way to do it ${type}");

console.log(`this is another cool way to play with a ` + type);
console.log(`this is another cool way to play with a`, type);

function displayAlert(message) {
    alert(message);
}

displayAlert("this is a custom alert message");
displayAlert("this is another custom alert message");