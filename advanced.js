let _ = require("lodash");

let itemArray = [];
let clock = { name: "clock", weight: 2, value: 10 };
let sword = { name: "sword", weight: 10, value: 50 };
let shield = { name: "shield", weight: 20, value: 30 };
let food = { name: "food", weight: 5, value: 10 };
let fancyFood = { name: "fancy food", weight: 5, value: 20 };

itemArray.push(clock);
itemArray.push(sword);
itemArray.push(shield);
itemArray.push(food);
itemArray.push(fancyFood);

fillLootSack(30, itemArray);

function fillLootSack(size, items) {
    let spaceLeft = size;
    let isSpaceLeft = true;
    while (isSpaceLeft){
        for (let item in items){
            
        }
    }
}