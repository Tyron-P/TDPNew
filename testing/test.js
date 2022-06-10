"use strict";
const mocha = require("mocha");
const chai = require('chai');
const { expect } = require("chai");
const { equal } = require("assert");


const mathMult = (num1, num2, num3, num4, num5) => {
    return num1*num2*num3*num4*num5;

};

let mult = mathMult(1, 2, 3, 4, 5);
console.log(mult);

describe('testing a mutiplication fuction', function() {
    
    it('should multiply to 120', function(){
    expect(mathMult(1, 2, 3, 4, 5)).to.equal(120) //test to see if function multiplies to 120
});
});



// const doggoComp = () 
let place = (5);
let numberPlaces = 10
 const arr = Array.from({length: numberPlaces}
for (let x = 0; x <=numberPlaces.length; x++)
 {
    if (x === place) {
        continue;
    }
     console.log(arr)
})


// let place = (5);
// let numberPlaces = []
 
// for (let x = 0; x <=100; x++)
//  {
//     if (x === place) {
//         continue;
//     }
//     console.log(x)
// }




