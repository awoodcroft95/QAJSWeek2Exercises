let _ = require("lodash");

function filterDuplicates(inputArray){
    return _.uniq(inputArray);
}

console.log(filterDuplicates(["John", "Taylor", "John"]));

function decendingSort(inputNumber){
    let numberString = inputNumber.toString();
    let numberArray = numberString.split("");
    let sortedArray = numberArray.sort();
    let sortedDecArray = sortedArray.reverse();
    let sortedString = sortedDecArray.join("");
    let sortedNum = parseInt(sortedString);
    return sortedNum;
}

console.log(decendingSort(5732547));

function validEmail(emailString){
    let dotCom = false;
    let atSymbol = false;
    let 
    if (_.endsWith(emailString, ".com")) {
        dotCom = true;
    } else if (emailString == "check for @ symbol"){

    }
}