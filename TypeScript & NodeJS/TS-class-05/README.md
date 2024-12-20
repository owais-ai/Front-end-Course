**Type Annotation in TypeScript:**
“Type Annotation refers to the practice of explicitly specifying the type of a variable, parameter, or return value in TypeScript using the : Type syntax.”

Why Use Type Annotations?
1.	Explicitness: They make the code more explained, readable and easier to understand.
2.	Type Safety: Prevents bugs by catching type-related errors during development.
3.	Better Tooling: Provides better IntelliSense and auto-completion in modern editors.

How to check type of a variable?
•	You can use JavaScript's typeof operator to check the type.


**Union Types**
TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. 
Now that we know how to write a few types, it’s time to start combining them in interesting ways.

Defining a Union Type   |
•	The first way to combine types you might see is a union type. 
•	A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
Key Points:
•	TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

•	The solution is to narrow the union with code, or a condition.


**String concatenation:**
	“string concatenation is the process of combining two or more strings into one.”

1.	Using the + (Plus) Operator
2.	Using String.concat() Method
3.	Using Template Literal

**Properties:** 
 “Properties are values (or attributes) associated with an object or data.”

•	They do not perform actions. They just hold information.
•	Accessing a property does not require parentheses ().

String Properties:
1.	length
•	Returns the length of the string.


**Methods**
•	Definition:
Methods are functions associated with an object. They perform actions or operations on the object or its data.
•	Key Features:
o	Methods always involve some operation or behavior.
o	To invoke a method, you must include parentheses ()
String Methods

1.	charAt(index)
Returns the character at the specified index.


2.	includes(substring, start?)
Checks if the string contains a specific substring. And starts means checking the variable from specific start index.

3.	toLowerCase()
Converts the string to lowercase.


4.	toUpperCase()
Converts the string to uppercase.


5.	trim()
Removes whitespace from start and end of the string.
