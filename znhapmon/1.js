
// UCLN
const UCLN = (a,b) =>{
    if(a>=b){
        for(var i = b ; i >0 ; i--){
            if(a%i == 0 && b%i ==0){
                return i;
            }
        }
    }
    else if(b>a){
        for(var i = a ; i >0 ; i--){
            if(a%i == 0 && b%i ==0){
                return i;
            }
        }
    }
}

console.log(UCLN(9,6));