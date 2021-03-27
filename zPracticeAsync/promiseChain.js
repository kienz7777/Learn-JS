
// Chain : chuỗi, giải quyết call-back hell





// var promise = new Promise((resolve,reject) => {
//     resolve('success')
//     //reject('fail')        // chỉ thực thi đc 1 trong 2 : resolve hoặc reject
// })

// promise
//         .then(res => console.log(res))
//         .then(() => console.log(1))
//         .then(() => console.log(2))
//         .then(() => console.log(3))

//         .catch(err => console.log(err))
//         .finally(fil => console.log('Done'))    


// success
// 1
// 2
// 3
// Done


/////////////////////////////////////////////

const fly = (footF,footL) =>{
    return new Promise((resolve,reject) => {
        if(footF + footL == 2){
            resolve('Số chân là : 2')
        }
        reject(new Error('Ko bay được nha!!!'))
    })
}

fly(1,1)
        .then((res) => {
            console.log(res);   //Số chân là : 2
            return 1;
        })
        .then((value) => {
            console.log(value);  // 1
            return 2;
         })
        .then((value) => {
            console.log(value);  // 2
            return 3;
        })
        .then((value) => console.log(value))    // 3

        .catch(err => console.log(err))
        .finally(fil => console.log('Done'))  


// Số chân là : 2
// 1
// 2
// 3
// Done