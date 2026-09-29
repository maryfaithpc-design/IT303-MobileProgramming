let restaurant = {
    name: "Jollibee",
    location: "Calbayog City"
};

let customerInfo = {
    name: "Faith",
    table: 5
};

let orderNumber = 101;
let tax = 0.10;
let total = 0;

class Food {

    getDescription() {
        throw new Error("This method must be implemented.");
    }
}

class Burger extends Food {

    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }

    getDescription() {
        return this.name + " Burger";
    }
}

class Fries extends Food {

    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }

    getDescription() {
        return this.name + " Fries";
    }
}

class Order {

    #total = 0;
    #customerName;

    constructor(customerName) {
        this.#customerName = customerName;
    }

    addItem(food) {
        this.#total += food.price;
    }

    getTotal() {
        return this.#total;
    }

    getCustomer() {
        return this.#customerName;
    }
}

let burger1 = new Burger("Cheese", 95);
let burger2 = new Burger("Bacon", 120);

let fries1 = new Fries("Cheese", 55);
let fries2 = new Fries("Sour Cream", 85);

let burgers = [burger1, burger2];
let fries = [fries1, fries2];
let menu = [burger1, burger2, fries1, fries2];

if (menu.length > 0) {
    console.log("Hello, Welcome to " + restaurant.name);
} else {
    console.log("Menu is empty.");
}

if (customerInfo.table > 0) {
    console.log("Table Number: " + customerInfo.table);
} else {
    console.log("Take-out order.");
}

if (orderNumber > 0) {
    console.log("Order Number: " + orderNumber);
} else {
    console.log("No order number.");
}

console.log("\n==== MENU ====");

for (let i = 0; i < menu.length; i++) {
    console.log(
        (i + 1) + ". " +
        menu[i].getDescription() +
        " - PHP " +
        menu[i].price
    );
}

console.log("\n==== BURGERS ====");

for (let burger of burgers) {
    console.log(burger.getDescription());
}

console.log("\n==== FRIES ====");

for (let fry of fries) {
    console.log(fry.getDescription());
}

console.log("\n==== POLYMORPHISM ====");

let foods = [burger1, fries1];

for (let food of foods) {
    console.log(food.getDescription());
}

let myOrder = new Order(customerInfo.name);

myOrder.addItem(burger1);
myOrder.addItem(fries1);

total = myOrder.getTotal();

let taxAmount = total * tax;
let finalTotal = total + taxAmount;

console.log("\n==============================");
console.log("       ORDER RECEIPT");
console.log("==============================");
console.log("Restaurant: " + restaurant.name);
console.log("Location: " + restaurant.location);
console.log("Customer: " + myOrder.getCustomer());
console.log("Order Number: " + orderNumber);
console.log("------------------------------");
console.log("Item 1: " + burger1.getDescription());
console.log("Price: PHP " + burger1.price);
console.log("Item 2: " + fries1.getDescription());
console.log("Price: PHP " + fries1.price);
console.log("------------------------------");
console.log("Subtotal: PHP " + total);
console.log("Tax: PHP " + taxAmount);
console.log("Total: PHP " + finalTotal);
console.log("------------------------------");
console.log("Thank you for ordering!");
console.log("===============================");