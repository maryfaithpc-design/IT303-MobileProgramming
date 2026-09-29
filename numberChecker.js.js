let numbers = [10, 25, 30, 45];

let limit = 28;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > limit) {
        console.log(numbers[i] + " is above " + limit);
    } else {
        console.log(numbers[i] + " is below or equal to " + limit);
    }
}

console.log("Done checking all numbers.");