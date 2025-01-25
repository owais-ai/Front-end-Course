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
            reject("washing not completed...");
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
washing().then((value) => {
    console.log(value);
    return soaking();
}).then((value) => {
    console.log(value);
    return Drying();
}).then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
}).finally(() => {
    console.log("Your washing has been completed");
});
export {};
