
function washing(callback) {
  console.log("washing started....");
  setTimeout(() => {
    console.log("washing finished!");
    callback();
  }, 8000);
}



function soaking(callback) {
  console.log("Soaking  started...");
  setTimeout(() => {
    console.log("soaking completed!");
    callback();
  }, 5000);
}

function drying(){
    console.log("drying started....");
    setTimeout(() => {
        console.log("Drying completed!");
        
    }, 6000);
    
}

washing(()=>{
    soaking(()=>{
        drying();
    });
})

console.log("Cooking started...");
console.log("Cooking completed");

