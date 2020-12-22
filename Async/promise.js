// Promise have 2 parameter : resolve = then ,reject = catch
// Run resolve or reject then stop

// const promise1 = new Promise((resolve,reject) => {
//     //resolve('hello word');
//     reject('hi');
// });

// promise1
//     .then(res => console.log(res))
//     .catch(err => console.log(`err: ${err}`))

let add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('Tham số phải là number'))
            }
            return resolve(a+b);
        },1000);
    })
}

add(4,"5")
    .then(res => console.log(res))
    .catch(err => console.log(err + ''))

