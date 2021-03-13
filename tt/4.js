

const k = [-3, 3, 2, 4, 5, 7, 2, 3, 3];

const mulNextMax = (k) => {
    var max = 0;
    var index = 0;
    for(var i = 0; i < k.length - 1; i++){
        var t = k[i] * k[i+1];
        if(t > max){
            max = t;
            index = i;
        }
    }
    return index;
}

console.log(k[mulNextMax(k)],k[mulNextMax(k)+1]);