'use strict'

window.onload = function(){
    var addButton = document.getElementById("addItem");

    addButton.addEventListener('click', function(){
        var list = document.getElementById('list');
        var inputEl = document.getElementById('todoInput');
        var input = inputEl.value;
        if (!input) return;
        var li = document.createElement('li');
        li.innerHTML = input;
        li.addEventListener('click', function(e){
            var el = e.target;
            var classList = el.classList;

            if (classList.contains('done')){
                classList.remove('done');
            }
            else{
                classList.add('done');
            }
        })
        list.appendChild(li);
        inputEl.value = '';
    })


    var timer = setInterval(timerFunc, 1000);
    var timerDiv = document.getElementById('time');

    function timerFunc(){
        var t = new Date()
        timerDiv.innerHTML = t.getHours()+':'
        + t.getMinutes() + ':'
        + t.getSeconds();
    }

// ДЗ часть 3
    var getTimer = function (maxI){ 
        var counter = 0;
        var fff = function(){ 
        console.log(maxI + ":" + counter++); 
            if(maxI > counter){
                setTimeout(fff, 1000)
            }} 
        fff(); 
    }
    getTimer(10); 

// ДЗ часть 1
    var array = [1,2,3,4,5,6];
    array.reduce(function(a,b){
        a[b] = b * b;
        return a; 
    }, {})
    console.log(array); 

    var array1 = [[4,5],[5,6,7], [45,34,32] ]; 
    var returnValue = array1.reduce((a, b) =>{
        return a.concat(b); 
    }, [])
    console.log(returnValue); 
// ДЗ часть 2

    var fibonacci  = ( function() {
        var memo = [0, 1]; 
        var fib = function(n){
            var result = memo[n]; 
            if(typeof result !== 'number') {
                result = fib(n-1) + fib(n-2); 
                memo[n] = result; 
            }
            return result; 
        }; 
        return fib;
    } ()); 
    console.log(fibonacci(10)); 
    

}