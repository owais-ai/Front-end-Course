function hello(): any {
  console.log("Hello Pakistan!");
}

hello();

// A function with parameters

function printName(name: string = "Khan"): void {
  console.log("Hello", name, "How are you today?");
  console.log(`Hi ${name}, how are you today?`);
}

printName("Owais");

printName("Anus");

function addNum(num1: number, num2: number): void {
  console.log(num1 + num2);
}
addNum(10, 5);

function calculator(a: number, b: number, opearation: string) {
  if (opearation == "addition") {
    console.log(a + b);
  } else if (opearation == "subtract") {
    console.log(a - b);
  } else if (opearation == "multiply") {
    console.log(a * b);
  } else if (opearation == "divide") {
    console.log(a / b);
  }
}

calculator(10, 2, "multiply");

// Function with default parameter

function adNum(a: number, b: number = 4): void {
  console.log(a + b);
}

adNum(40);

adNum(40, 50);

// function with optional parameter

function optionalPara(name?: string): void {
  if (name) {
    console.log("Hello", name);
  } else {
    console.log("Hello Unknown person");
  }
}

optionalPara();

optionalPara("Ali")


// Arrow function

const subNum = (a:number, b:number):void => {
  console.log(a - b);
}

subNum(10,5);
