var person1 = {
    id: 1,
    firstName: "Owais",
    secondName: "Khan",
    age: 30,
    isStudent: false,
    isTeacher: true,
    city: "Karachi"
};
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.secondName);
// console.log(person1.isStudent);
// console.log(person1.isTeacher);
console.log(person1.age);
//to update a property
person1.age = 31;
console.log(person1.age);
console.log(person1);
//inorder to add another property (key value pair)
// person1.country = "Pakistan";
// console.log(person1);
//to delete a property
delete person1.city;
console.log(person1);
// Nested Objects, a object within another object
var person2 = {
    id: 1,
    firstName: "Ali",
    secondName: "Khan",
    age: 20,
    isStudent: true,
    isTeacher: false,
    address: {
        country: "Pakistan",
        city: "Karachi"
    }
};
// Assessing nested objects properties
console.log(person2.address);
console.log(person2.address.city);
//type assertion
var car1 = {
    name: "Corolla",
    model: 2020,
    color: "Black",
    capacity: 4
};
// the following code give error, because capacity should be a number type rather than a string
// car1.capacity = "four" 
