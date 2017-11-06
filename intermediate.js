let _ = require("lodash");

function filterDuplicates(inputArray){
    return _.uniq(inputArray);
}

console.log(filterDuplicates(["John", "Taylor", "John"]));

function decendingSort(inputNumber){
    let numberArray = inputNumber.toString().split("");
    let sortedArray = numberArray.sort();
    let sortedDecArray = sortedArray.reverse();
    let sortedString = sortedDecArray.toString("");
    let sortedNum = parseInt(sortedString);
    return sortedNum;
}

console.log(decendingSort(5732547));