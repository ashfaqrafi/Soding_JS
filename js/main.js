const MAX = 4000000;

function f(limit){
    var sum=2;
    var a=1,b=2;
    var fib=0;
    while(fib<=limit){
        fib = a+b;
        a=b;
        b=fib;
        if(fib%2===0) sum+=fib;
    }
    return sum;
}

document.write('The sum of the even-valued terms in the Fibonacci sequence : ',f(MAX));
