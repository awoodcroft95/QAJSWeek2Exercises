let _ = require("lodash");

function filterDuplicates(inputArray) {
    return _.uniq(inputArray);
}

console.log(filterDuplicates(["John", "Taylor", "John"]));

function decendingSort(inputNumber) {
    let numberString = inputNumber.toString();
    let numberArray = numberString.split("");
    let sortedArray = numberArray.sort();
    let sortedDecArray = sortedArray.reverse();
    let sortedString = sortedDecArray.join("");
    let sortedNum = parseInt(sortedString);
    return sortedNum;
}

console.log(decendingSort(5732547));

function validEmail(emailString) {
    let dotCom = false;
    let atSymbol = false;
    let validBeforeAt = false;
    let atSymbolLocation = emailString.indexOf("@");
    let lastAtSymbolLoc = emailString.lastIndexOf("@");
    if (_.endsWith(emailString, ".com")) {
        dotCom = true;
    }
    if (atSymbolLocation === lastAtSymbolLoc) {
        atSymbol = true;
        if (atSymbolLocation !== 0) {
            validBeforeAt = true;
        }
    }
    if (dotCom && atSymbol && validBeforeAt) {
        return true;
    } else {
        return false;
    }
}

console.log(validEmail("@gmail.com"));
console.log(validEmail("hello@edabit.com"));

function isAPrime(intInput){
    if (intInput <= 1){
        return false;
    } else if (intInput <= 3) {
        return true;
    } else if ((intInput % 2 === 0) || (intInput % 3 === 0)){
        return false;
    }
    let i = 5;
    while (i * i <= intInput){
        if (intInput % i === 0 || intInput % (i + 2) === 0){
            return false;
        }
        i = i + 6;
    }
    return true;
}

console.log(isAPrime(32423469301));

function keysAndValues(obj){
    let keys = [];
    let values = [];
    keys = Object.keys(obj);
    values = Object.values(obj);
    return [keys, values];
}

console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));

function stringIncreaser(string){
    let newString = "";
    for (let i = 0; i < string.length; i++){
        newString += _.upperFirst(_.repeat(string.charAt(i), i+1));
        if (i < string.length - 1){
            newString += "-";
        }
    }
    return newString;
}

console.log(stringIncreaser("abcd"));