console.log(Math.random().toPrecision(3)*10 + 1); // Minimum value 1, if the random value is 0
let min = 10;
let max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min)); // Generating Floor values considering minimum value to be 10.