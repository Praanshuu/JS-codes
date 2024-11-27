// const tinderUser = new Object ()
// tinderUser.id = '122abs';
// tinderUser.name = 'Sam';
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// const regularUser = {
// 	email : "sum@gmail.com",
// 	fullname : {
// 		userFullName : {
// 			firstName : "Pranshu",
// 			lastName : "Sahu"
// 		}
// 	}
// }
// console.log(regularUser.fullname);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

console.log(obj1[1]);