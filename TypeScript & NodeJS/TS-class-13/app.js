function washing(callback) {
    console.log("washing started....");
    setTimeout(function () {
        console.log("washing finished!");
        callback();
    }, 8000);
}
function soaking(callback) {
    console.log("Soaking  started...");
    setTimeout(function () {
        console.log("soaking completed!");
        callback();
    }, 5000);
}
function drying() {
    console.log("drying started....");
    setTimeout(function () {
        console.log("Drying completed!");
    }, 6000);
}
washing(function () {
    soaking(function () {
        drying();
    });
});
console.log("Cooking started...");
console.log("Cooking completed");
