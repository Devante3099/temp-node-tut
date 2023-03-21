// Promises is an object that returns a value

//async await
//consume/use promises

// 3 outcomes for promises ---- Pending, Rejected, Fulfilled

//in order to create a promise we need to use a constructor where we pass in a callback function, with 2 or more arguments.

const value = 3


const promise = new Promise((resolve, reject) => {
    const random = 3 //Math.floor(Math.random * 3);
    if (value === random) {
        resolve('correct number heres your data')
    } else {
        reject('wrong numba hoe')
    }
})

//returns the whole object
console.log(promise)

//returns the value
promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

