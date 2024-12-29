# Arrays 

**Arrays are used to store multiple values in a single variable, and in TypeScript, they can hold elements of a specific type.**

### How to work with Arrays in TS: 
1. Declaring Arrays in TypeScript
You can declare an array in TypeScript using one of the following syntaxes:

a) Using Square Brackets [ ]:
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "cherry"];


2. Accessing and Modifying Array Elements

// Accessing an element
console.log(numbers[0]); // Output: 1

// Modifying an element
numbers[2] = 10; // Now the array is [1, 2, 10, 4, 5]


3. Array Methods
TypeScript arrays come with a variety of methods that are available to all arrays in JavaScript. Here are some examples:

a) .push() - Adds an element to the end of the array:
let fruits: string[] = ["apple", "banana"];
fruits.push("cherry"); // Adds "cherry" to the end
console.log(fruits); // Output: ["apple", "banana", "cherry"]

b) .pop() - Removes the last element from the array:
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.pop(); // Removes "cherry"
console.log(fruits); // Output: ["apple", "banana"]

c) .shift() - Removes the first element from the array:
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.shift(); // Removes "apple"
console.log(fruits); // Output: ["banana", "cherry"]

d) .unshift() - Adds an element to the beginning of the array:
let fruits: string[] = ["banana", "cherry"];
fruits.unshift("apple"); // Adds "apple" at the beginning
console.log(fruits); // Output: ["apple", "banana", "cherry"]


4. Array Length 
To Get the length of an array:

let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits.length); // Output: 3


5. Array Types with Union Types
TypeScript allows you to specify an array that can hold multiple types, known as union types.
let mixedArray: (number | string)[] = [1, "hello", 2, "world"];
console.log(mixedArray); // Output: [1, "hello", 2, "world"]


6. Readonly Arrays
If you want to create an array that cannot be modified (i.e., immutable), you can use the readonly modifier.
fruits: readonly string[] = ["apple", "banana", "cherry"];
// fruits.push("orange"); // Error: Property 'push' does not exist on type 'readonly string[]'.



