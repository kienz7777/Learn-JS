// chủ yếu lấy ra key của Object

var myInfo = {
    name : 'koz',
    age : 18,
    address: '16/5'
}

for(var key in myInfo){
    console.log(key);       // lấy ra key
    console.log(myInfo[key]);
}