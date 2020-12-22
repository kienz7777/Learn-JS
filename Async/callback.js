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