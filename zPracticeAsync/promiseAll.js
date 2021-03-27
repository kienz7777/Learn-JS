// promise.all : cho phép chạy song song đồng thời


var promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve([1,2])
    },2000)
});

var promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve([3])
    },3000)
});

// ==============> Chạy xong hết Mất 5s

// Dùng Promise.all ===> mất 3s
// Promise.all nhận vào mảng các promise , trả về mảng
// Nếu mà 1 thằng bị reject thì tất cả đều reject

Promise.all([promise1,promise2])
        .then((res) => {
            console.log(res)    // [ [ 1, 2 ], [ 3 ] ]

            var res1 = res[0];
            var res2 = res[1];
            console.log(res1.concat(res2));  // [ 1, 2, 3 ]
        })    