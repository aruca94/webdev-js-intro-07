"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(num1,num2) {
    let roundedNum = Math.round(num1/num2 % 2);
    remainderElement.innerText = roundedNum;
};

function render(){
    returnTheRemainder(5,4);

};



submissionBtn.addEventListener("click", function() {
    //Why does this return NaN?
    // returnTheRemainder();
    render();
});
