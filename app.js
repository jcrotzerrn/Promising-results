async function doMath() {
    try {
        let result = await slowMath.add(6, 2); 
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result); 
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(result);
        console.log(`The final result is ${result}!`);
    } catch (err) {
        console.log("Something didn't add up!");
    }
};
doMath();

// slowMath.add(6, 2) 
// .then(results => {
//     console.log(results); //can log synchronously b/c promise is resolved now
//     return slowMath.multiply(results, 2); //return a new promise!
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.divide(results, 4);
//     // return anotherPromise(); etc ..
// })
// .then(results => {
//     console.log(results);
//     return slowMath.subtract(results, 3);
// })
// .then(results => {
//     console.log(results);
//     return slowMath.add(results, 98);
// })
// .then(results => {
//     console.log(results);
//     return slowMath.remainder(results, 2);
// })
// .then(results => {
//     console.log(results);
//     return slowMath.multiply(results, 50);
// })
// .then(results => {
//     console.log(results);
//     return slowMath.remainder(results, 40);
// })
// .then(results => {
//     console.log(results);
//     return slowMath.add(results, 32);
// })
// .then(results => {
//     console.log(`The final result is ${results}!`);
// })
// .catch(err => {
//     console.log(err);
// })


