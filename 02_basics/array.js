const myArr = [0, 1, 'item']
//resizable, support mix data type, copy-operation creates shallow copies(same reference point)
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2]);

// Array Methods
//inserts values at the end
//myArr2.push(6); 

//removes the last element
//myArr2.pop();

//add the item at the start
//myArr2.unshift(2)

//removes the item at the start
//myArr2.shift()

//myArr2.includes(2); checks for the item and returns boolean value

//myArr2.index(item) returns the index of item

//myArr.join(); returns the items of array separated by comma as a combined string

//slice & splice methods
// myArr2.slice(1,3); return the section of array including starting range till the ending range without including it. It doesn't manipulate the original array.

//mmyArr2.splice(1,3); returns the section of array including the ending range. It also manipulates the orignal array by deleting the selected range of items.

console.log(myArr2);