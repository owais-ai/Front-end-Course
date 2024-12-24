##OBJECTS##
Objects in JavaScript and TypeScript

- Objects are fundamental building blocks in both JavaScript and TypeScript. They represent collections of key-value pairs, where the keys are property names and the values can be any type data.

- Objects can represent real-world entities, such as a user, product, or order, with their associated attributes (properties) and behaviors (methods).

- Real Life Objects: In real life, objects are things like: houses, cars, people, animals, or any other subjects.

**1. Basics of Objects**
   Object Literal Syntax
- An object is created using curly braces {}.
  const person = { name: "Owais", age: 30, isStudent: true, };

**2. Accessing Object Properties**
   -using Dot Notation
   console.log(person.name); // Output: "Owais"

**3. Adding and Modifying Properties**

- You can add or modify properties dynamically.
  person.city = "New York"; // Adding a new property
  person.age = 26; // Modifying an existing property

**4. Removing Properties**

- Use the delete operator to remove properties.
  delete person.isStudent;
  console.log(person); // { name: "Owais", age: 30, city: "New York" }

**6. Objects in TypeScript**

- TypeScript extends JavaScript objects by allowing you to define their structure explicitly using types or interfaces.
  type Person = { name: string; age: number; isStudent: boolean; };

**7. Nested Objects**

- Objects can contain other objects as values.
  const user = { id: 1, name: "Alice", address: { city: "New York", zip: "10001", }, };
