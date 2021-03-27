// Trước khi có promise thì việc giải quyết bất đồng bộ là :  call-back hell
// Tại sao ng ta lại dùng call-back hell, vì phải xong tác vụ này thì ms thực hiện tác vụ kia .......

// Promise sinh ra là để giải quyết việc bất đồng bộ , giải quyết call-back hell (ko dùng call-back hell nữa)


// 1.pending : khi chưa gọi resolve hoặc reject
// 2.fulfil  : khi gọi resolve
// 3.reject  : khi gọi reject

var promise = new Promise((resolve,reject) => {
    resolve('success')
    //reject('fail')        // chỉ thực thi đc 1 trong 2 : resolve hoặc reject
})

promise
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(fil => console.log('Done'))    // finally luôn thực hiện sau resolve hoặc reject


///////////////////////////////////////////////////////////

