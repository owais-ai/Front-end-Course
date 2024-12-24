###Modules

“A module is simply a file containing TypeScript code.”
Modules allow you to:
•	Share code between files.
•	Improve code organization and maintainability.

How Modules Work in TypeScript
1.	Export:
Use export to make variables, functions, or classes to other files.
2.	Import:
Use import to bring the exported members from another module into your file.


**Types of Exports**
There are two ways to export in TypeScript:

**1. Named Exports**
•	You can export multiple items from a module.
•	Items must be imported using their exact names.


**2. Default Exports**
•	A module can have a single default export.
•	You can name the import anything when importing a default export.

How Modules Work
1.	Export Something from a Module:
	Use export or export default.
2.	Import It in Another Module:
	Use import with the path to the file.


**Benefits of Modules**
1.	Encapsulation: Keeps code organized and prevents name conflicts.
2.	Reusability: Makes it easy to reuse code across projects.
3.	Better Maintenance: Each module focuses on a single responsibility, making it easier to debug and update.

