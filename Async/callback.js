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



//call-back

let add = (a,b,cb) => {
    setTimeout(()=>{
        let err,result;
        if(typeof a != 'number' || typeof b != 'number'){
            err = 'Lõi nha!!!'
            return cb(err,result);
        }
        else{
            result = a + b;
            return cb(err,result);
        }
    },1000);
}

add(1,'p',(err,result) => {
    if(err){
        console.log('Err ' + err);
    }
    else{
        console.log('Result: ' + result);
    }
})