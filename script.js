console.log("\nQuestion 1: Print Only Odd Numbers.");
// Create a function printOdd(arr) that takes an array as input and prints only odd numbers using a for loop. 

function printOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}

// Example
printOdd([1, 2, 3, 4, 5]);

console.log("\nQuestion 2: Count Odd Numbers.");
// Create a function countOdd(arr) that counts and returns how many odd numbers are present in the array. 

function countOdd(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
}

// Example
console.log(countOdd([3, 6, 9, 10]));

console.log("\nQuestion 3: Print Array in Reverse.");
// Create a function printReverse(arr) that prints array elements in reverse order using a for loop. 

function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// Example
printReverse([10, 20, 30]);

console.log("\nQuestion 4: Multiply Each Element by 5.");
// Create a function multiplyByFive(arr) that returns a new array with each value multiplied by 5. 

function multiplyByFive(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 5);
    }

    return result;
}

// Example
console.log(multiplyByFive([2, 4]));

console.log("\nQuestion 5: Find the Smallest Number");
// Create a function findMin(arr) that finds and returns the smallest number in the array. 

function findMin(arr) {
    let min = arr[0]; // assume first element is smallest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

// Example
console.log(findMin([8, 3, 6, 1]));

console.log("\nQuestion 6: Print Positive Numbers.");
// Create a function printPositive(arr) that prints only positive numbers from the array. 

function printPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
        }
    }
}

// Example
printPositive([-2, 5, -1, 7]);

console.log("\nQuestion 7: Count Numbers Greater Than 10.");
// Create a function countGreater(arr) that counts numbers greater than 10 and returns the count. 

function countGreater(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            count++;
        }
    }

    return count;
}

// Example
console.log(countGreater([5, 12, 20, 8]));

console.log("\nQuestion 8: Convert to Negative Numbers.");
// Create a function makeNegative(arr) that converts all numbers of the array into negative values. 

function makeNegative(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(-Math.abs(arr[i]));
    }

    return result;
}

// Example
console.log(makeNegative([2, -4, 5]));

console.log("\nQuestion 9: Print Index with Value.");
// Create a function printIndexValue(arr) that prints index and value in the format: Index 0 : 10. 

function printIndexValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Index " + i + " : " + arr[i]);
    }
}

// Example
printIndexValue([10, 20]);

console.log("\nQuestion 10: Sum of Even Numbers.");
// Create a function sumEven(arr) that returns the sum of even numbers only.

function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

// Example
console.log(sumEven([1, 2, 4, 5]));

console.log("\nQuestion 11: Increment Array Values.");
// Create a function incrementArray(arr) that adds 1 to each element and returns a new array.

function incrementArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }

    return result;
}

// Example
console.log(incrementArray([4, 7]));

console.log("\nQuestion 12: Check Zero in Array.");
// Create a function hasZero(arr) that returns true if zero exists, otherwise false.

function hasZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return true;
        }
    }
    return false;
}

// Example
console.log(hasZero([3, 0, 5]));