const input = require('sync-input');

let  currentWater = 400
let  currentMilk = 540
let  currentCoffeeBeans = 120
let  currentCups = 9
let  currentMoney = 550

console.log("The coffee machine has:");
console.log(currentWater + " ml of water");
console.log(currentMilk + " ml of milk");
console.log(currentCoffeeBeans + " g of coffee beans");
console.log(currentCups + " disposable cups");
console.log("$" + currentMoney + " of money")


while (true) {
    const userAction = input("Write action (buy, fill, take, remaining, exit):")

    if (userAction === "buy") {
        const buyActionInput = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        const buyAction = parseInt(buyActionInput);

        let missingResource = "";

        if (buyAction === 1 || buyActionInput === "espresso") {
            if (currentWater < 250) {
                missingResource = "water";
            } else if (currentCoffeeBeans < 16) {
                missingResource = "coffee beans";
            } else if (currentCups < 1) {
                missingResource = "cups";
            } else {
                currentWater -= 250;
                currentCoffeeBeans -= 16;
                currentMoney += 4;
                currentCups -= 1;
            }
        } else if (buyAction === 2 || buyActionInput === "latte") {
            if (currentWater < 350) {
                missingResource = "water";
            } else if (currentMilk < 75) {
                missingResource = "milk";
            } else if (currentCoffeeBeans < 20) {
                missingResource = "coffee beans";
            } else if (currentCups < 1) {
                missingResource = "cups";
            } else {
                currentWater -= 350;
                currentMilk -= 75;
                currentCoffeeBeans -= 20;
                currentMoney += 7;
                currentCups -= 1;
            }
        } else if (buyAction === 3 || buyActionInput === "cappuccino") {
            if (currentWater < 200) {
                missingResource = "water";
            } else if (currentMilk < 100) {
                missingResource = "milk";
            } else if (currentCoffeeBeans < 12) {
                missingResource = "coffee beans";
            } else if (currentCups < 1) {
                missingResource = "cups";
            } else {
                currentWater -= 200;
                currentMilk -= 100;
                currentCoffeeBeans -= 12;
                currentMoney += 6;
                currentCups -= 1;
            }
        }

        if (missingResource) {
            console.log(`Sorry, not enough ${missingResource}!`);
        } else {
            console.log("I have enough resources, making you a coffee!");
        }
    } else if (userAction === "fill") {
        let fillWater = parseInt(input("How much water do you want to add to the coffee machine (ml):"));
        currentWater += fillWater;

        let fillMilk = parseInt(input("How much milk do you want to add to the coffee machine (ml):"));
        currentMilk += fillMilk;

        let fillCoffee = parseInt(input("How much coffee do you want to add to the coffee machine (ml):"));
        currentCoffeeBeans += fillCoffee;

        let fillCups = parseInt(input("How many cups do you want to add to the coffee machine:"));
        currentCups += fillCups;
    } else if (userAction === "take") {
        console.log("I gave you $ " + currentMoney);
        currentMoney -= currentMoney
    } else if (userAction === "remaining") {
        console.log("The coffee machine has:");
        console.log(currentWater + " ml of water");
        console.log(currentMilk + " ml of milk");
        console.log(currentCoffeeBeans + " g of coffee beans");
        console.log(currentCups + " disposable cups");
        console.log("$" + currentMoney + " of money")
    } else if (userAction === "exit") {
        break;
    }
}
