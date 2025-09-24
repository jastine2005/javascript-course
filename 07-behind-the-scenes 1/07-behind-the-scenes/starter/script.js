'use strict';
// console.log(varX);
// console.log(letX);
// console.log(constX);
 
var varX = 1;
let letX = 2;
const constX = 3;
 
function addDecl(a, b) {
  return a + b;
}
 
const addExpr = function (a, b) {
  return a + b;
};
 
const addArrow = (a, b) => a + b;
 