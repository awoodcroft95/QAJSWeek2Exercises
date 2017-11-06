let _ = require("lodash");

function countWords(inputString){
    let splitString = inputString.split(" ");
    return splitString.length;
}

console.log(countWords("Just an example here move along"));

function lastElement(inputArray){
    let lastElement = inputArray[inputArray.length-1];
    return lastElement;
}

console.log(lastElement([1,2,3,4]));

function evenOrOdd(inputNum){
    if (inputNum % 2 === 1){
        return "odd";
    } else {
        return "even";
    }
}

console.log(evenOrOdd(146));

function nameReverse(nameString){
    let nameArray = nameString.split(" ");
    let reversedArray = _.reverse(nameArray);
    return reversedArray.join(" ");
}

console.log(nameReverse("Seymour Butts"));

function sortString(string){
    let stringArray = string.split("");
    let sortedString = stringArray.sort();
    return sortedString.join("");
}

console.log(sortString("hello"));

function smallestNumber(numArray){
    let min = Math.min.apply(null, numArray);
    return min;
}

console.log(smallestNumber([34, -345, -1, 100]));