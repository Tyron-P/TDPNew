const numbers = [3,5,6,4,7,8,42,22,11]

//finds highest and lowerst number

const minNum = numbers.reduce ((accumulator, next) =>
     Math.min(accumulator, next));

console.log (minNum);

// console.log(numbers.reduce((selectedNumber,maxNumber) => selectedNumber > maxNumber ? selectedNumber : maxNumber, 0));

const minNum = numbers.reduce ((accumulator, next) =>
     Math.min(accumulator, next));

console.log (minNum);

//console.log(numbers.reduce((selectedNumber,maxNumber) => selectedNumber < maxNumber ? selectedNumber : maxNumber, Infinity));

//filters odd and even
const filterONum = numbers.filter ((n) =>
n % 2==1);
console.log (filterONum)

const filterENum = numbers.filter ((n) =>
n % 2==0);
console.log (filterENum)


//finds sum total

const totalNum = numbers.reduce ((acc, next) => acc+next);
console.log (totalNum);


const square = numbers.maps(num => num * num).filter(num=> num %2 == 0).reduce((accumulator,next) => Math.min(accumulator, next));
console.log (square)