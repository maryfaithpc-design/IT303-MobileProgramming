const restaurant = {
    name: "Jollibee",
    location: "Calbayog City"
};

const customerInfo = {
    name: "Faith",
    table: 5
};

const TAX_RATE = 0.10;

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
        return `${this.name} Burger`;
    }
}

class Fries extends Food {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }

    getDescription() {
        return `${this.name} Fries`;
    }
}

class Order {
    #total = 0;
    #customerName;
    #items = [];

    constructor(customerName) {
        this.#customerName = customerName;
    }

    addItem(item) {
        this.#items.push(item);
        this.#total += item.price;
    }

    getTotal() {
        return this.#total;
    }

    getCustomer() {
        return this.#customerName;
    }
}

const burger1 = new Burger("Cheese", 95);
const burger2 = new Burger("Bacon", 120);
const fries1 = new Fries("Cheese", 55);
const fries2 = new Fries("Sour Cream", 85);

const burgers = [burger1, burger2];
const fries = [fries1, fries2];
const menu = [burger1, burger2, fries1, fries2];

const formatCurrency = (amount) => `PHP ${amount.toFixed(2)}`;
const computeTax = (amount) => amount * TAX_RATE;
const describeItem = ({ name, price }) => `${name} - ${formatCurrency(price)}`;
const isAffordable = (item) => item.price <= 100;
const getCustomerGreeting = (name) => `Welcome, ${name}!`;

let orderNumber = 101;
let total = 0;
let taxAmount = 0;
let finalTotal = 0;
let burgerCount = burgers.length;
let friesCount = fries.length;
let affordableCount = 0;
let currentTable = customerInfo.table;
let greeting = getCustomerGreeting(customerInfo.name);
let logMessage = "";

let { name: restaurantName, location } = restaurant;
let { name: customerName, table } = customerInfo;
let { name: burgerName, price: burgerPrice } = burger1;

let fullMenu = [...burgers, ...fries];
let extendedMenu = [...menu, new Burger("Spicy", 110)];

let orderSummary = { ...customerInfo, orderNumber };
let receiptInfo = { ...restaurant, taxRate: TAX_RATE };

let menuDescriptions = menu.map((item) => describeItem(item));
let menuPrices = menu.map((item) => item.price);

let affordableItems = menu.filter(isAffordable);
let burgersOnly = menu.filter((item) => item instanceof Burger);
affordableCount = affordableItems.length;

let myOrder = new Order(customerInfo.name);
myOrder.addItem(burger1);
myOrder.addItem(fries1);

let customerCard = {
    name: customerInfo?.name,
    table: customerInfo?.table ?? "N/A"
};

let orderCard = {
    customer: myOrder?.getCustomer?.(),
    total: myOrder?.getTotal?.() ?? 0
};

let firstBurger = burgers[0];
let secondBurger = burgers[1];
let firstFries = fries[0];
let secondFries = fries[1];

let sortedMenu = [...menu].sort((a, b) => a.price - b.price);
let cheapestItem = sortedMenu[0];
let restOfMenu = sortedMenu.slice(1);

if (menu.length > 0) {
    console.log(`hello! ${greeting} to ${restaurantName}`);
} else {
    console.log("Menu is empty.");
}

if (currentTable > 0) {
    console.log(`Table Number: ${currentTable} (destructured: ${table})`);
} else {
    console.log("Take-out order.");
}

if (orderNumber > 0) {
    console.log(`Order Number: ${orderNumber}`);
} else {
    console.log("No order number.");
}

console.log(`\n==== MENU (${menu.length} items) ====`);
menuDescriptions.forEach((desc, i) => {
    console.log(`${i + 1}. ${desc}`);
});

console.log(`\n==== BURGERS (${burgerCount}) ====`);
for (let burger of burgers) {
    console.log(burger.getDescription());
}
console.log(`First: ${firstBurger.name}, Second: ${secondBurger.name}`);

console.log(`\n==== FRIES (${friesCount}) ====`);
for (let fry of fries) {
    console.log(fry.getDescription());
}
console.log(`First: ${firstFries.name}, Second: ${secondFries.name}`);

console.log("\n==== POLYMORPHISM ====");
let foods = [burger1, fries1];

for (let food of foods) {
    console.log(food.getDescription());
}

console.log(`\n==== AFFORDABLE ITEMS (PHP 100 or less): ${affordableCount} ====`);
for (let item of affordableItems) {
    console.log(`${item.getDescription()} - ${formatCurrency(item.price)}`);
}

console.log(`Burgers-only via filter: ${burgersOnly.map((b) => b.name).join(", ")}`);

console.log(`\n==== SORTED BY PRICE ====`);
console.log(`Cheapest: ${cheapestItem.getDescription()} at ${formatCurrency(cheapestItem.price)}`);
console.log(`Remaining ${restOfMenu.length} item(s) after cheapest`);

console.log(`\n==== SPREAD & AGGREGATES ====`);
console.log(`Full menu (burgers+fries spread): ${fullMenu.length} items`);
console.log(`Extended menu (+Spicy Burger): ${extendedMenu.length} items`);
console.log(`Average menu price: ${formatCurrency(menuPrices.reduce((a, b) => a + b, 0) / menuPrices.length)}`);
console.log(`First burger destructured: ${burgerName} - ${formatCurrency(burgerPrice)}`);

total = myOrder.getTotal();
taxAmount = computeTax(total);
finalTotal = total + taxAmount;

console.log("\n==============================");
console.log("       ORDER RECEIPT");
console.log("==============================");
console.log(`Restaurant: ${receiptInfo.name}`);
console.log(`Location: ${location}`);
console.log(`Customer: ${orderCard.customer}`);
console.log(`Order Number: ${orderSummary.orderNumber}`);
console.log("------------------------------");
console.log(`Item 1: ${burger1.getDescription()} - ${formatCurrency(burger1.price)}`);
console.log(`Item 2: ${fries1.getDescription()} - ${formatCurrency(fries1.price)}`);
console.log("------------------------------");
console.log(`Subtotal: ${formatCurrency(total)}`);
console.log(`Tax (${(receiptInfo.taxRate * 100).toFixed(0)}%): ${formatCurrency(taxAmount)}`);
console.log(`Total: ${formatCurrency(finalTotal)}`);
console.log("------------------------------");

logMessage = `Thank you for ordering, ${customerCard.name}!`;
console.log(logMessage);

console.log("===============================");