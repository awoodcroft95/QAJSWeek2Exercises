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
    let lootSack = { capacity: size, bagItems: [], weight: 0, value: 0 };
    while (isSpaceLeft) {
        let tempRemove = [];
        let itemsRemove = [];
        if (lootSack.weight < lootSack.capacity) {
            for (let item in items) {
                lootSack.bagItems.push(item);
                itemsRemove.push(item);
            }
            items = _.difference(items, itemsRemove);
        } else if (lootSack.weight = lootSack.capacity) {
            isSpaceLeft = false;
        } else if (lootSack.weight > lootSack.capacity) {
            // remove the smallest item;
        }
        
        for (let storedItem in lootSack.bagItems) {
            for (let item in items) {
                if (storedItem.weight === item.weight) {
                    if (storedItem.value < item.value) {
                        tempRemove.push(storedItem);
                        lootSack.bagItems.push(item);
                    }
                }
            }
        }
        lootSack.bagItems = _.difference(lootSack.bagItems, tempRemove);
    }
}