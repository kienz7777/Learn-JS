const item = "hello every body, hello nice to meet you";

//output = hi every body, hi nice to meet you

var replaceAll = (item,strOld,strNew) => {
    while(item.includes(strOld)){
        item = item.replace(strOld,strNew);
    }
    return item;
}

var cont = replaceAll(item,'hello','hi');
console.log(cont);