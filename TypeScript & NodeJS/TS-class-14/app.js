//Promises in TypeScript
// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise is Rejected");
//     }, 5000);
// })
// mypromise.catch((value) => {
//     console.log(value);
// });
function washing() {
    console.log("washing started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing completed...");
        }, 5000);
    });
}
function soaking() {
    console.log("soaking started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("soaking completed..");
        }, 2000);
    });
}
function Drying() {
    console.log("Drying started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying completed...");
        }, 3000);
    });
}
// Concurrency using Promises
// washing().then((value) => {
//     console.log(value);
//     return soaking()
// }).then((value) => {
//     console.log(value);
//     return Drying()
// }).then((value) => {
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// }).finally(()=>{
//     console.log("Your washing has been completed");
// })
// Concurrency using Asynic Await
async function washingMachine() {
    try {
        let result1 = await washing();
        console.log(result1);
        let result2 = await soaking();
        console.log(result2);
        let result3 = await Drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Washing Machine done");
    }
}
washingMachine();
console.log("Frying eggs");
console.log("Frying completed");
export {};
