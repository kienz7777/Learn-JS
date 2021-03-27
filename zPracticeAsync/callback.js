// Là hàm (function) được truyền qua đối số khi họi hàm khác

//1. Là hàm
//2. Được truyền qua đối số của hàm khác
//3. Được gọi lại trong hàm nhận đối số

const myFunction = (param) => {
    if( typeof param === 'function'){
        param('call me');
    }

}

const myCallback = (value) => {
    console.log(value);
}

myFunction(myCallback);



// call-back
const sumTotal = (num1,num2,cb) => {
    if((num1 + num2) % 2 == 0)
        return cb({error : false, mess: 'ENC'})
    return cb({error : true, mess : 'LOCK'})
}

sumTotal(1,3,(sum)=>{
    if(sum.error == false){
        console.log('ERR');
        console.log(sum);
    }
    else{
        console.log('SUC');
        console.log(sum);
    }
});


// callback hell
const danhRang = (lam) => {
    console.log('danh rang');
    lam();
}

const ruaMat = (lam) => {
    console.log('rua mat');
    lam();
}

const dichich = (lam) => {
    console.log('di chich');
    lam();
}

// call-back hell 
danhRang(()=>{
    ruaMat(()=>{
        dichich(()=>{
            danhRang(()=>{
                ruaMat(()=>{
                    dichich(()=>{
                        console.log('done');
                    })
                })
            });
        })
    })
});