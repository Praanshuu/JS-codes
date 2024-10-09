//creating Date Object/ instance
const currentDate = new Date();
console.log(currentDate);

// conversion to String
console.log(currentDate.toString());

// conversion toDateString
console.log(currentDate.toDateString());

// conversion to ISO String
console.log(currentDate.toISOString());

// conversion to Local Date String
console.log(currentDate.toLocaleDateString());

// conversion to Local String
console.log(currentDate.toLocaleString('en-IN'));

console.log(currentDate.getDay());

console.log(currentDate.toLocaleString('default',{
    weekday: 'long',
    dayPeriod: 'long'
}));