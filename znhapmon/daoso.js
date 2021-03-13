// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

const k = 123;

const revert = (k) => {
    k = parseInt(k);
    var t, x = 0;
    while(k>0){
        t = k % 10;
        k = k / 10;
        k = parseInt(k);
        x = x*10 + t;
    }
    if(k < 0){
        k = k*-1;
        while(k>0){
            t = k % 10;
            k = k / 10;
            k = parseInt(k);
            x = x*10 + t;
        }
        return -x;
    }
    return x;
}

console.log(revert(k));