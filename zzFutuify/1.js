document.addEventListener("DOMContentLoaded", function(){

    var button = document.querySelector('.content');
    
    var count = document.querySelector('.count');

    button.onclick = function(){
        count.value = parseInt(count.value) + 1;
    }
}, false)