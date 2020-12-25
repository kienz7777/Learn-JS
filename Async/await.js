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


const run = async () => {
    await    add(4,"5")
                .then(res => console.log(res))
                .catch(err => console.log(err + ''))

    console.log('hello');
}

run();