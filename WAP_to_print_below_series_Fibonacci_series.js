console.log("WAP to print below series Fibonacci series");

const Fibonacci=(number)=>{
    let a=0,b=1,c;
    let arr=[];
    for(let i=0;i<number;i++){
        console.log(a);
            c=a+b;
            a=b;
            b=c;
    }
    return a;
}

console.log("=====   INPUT   =====");

let number=7;
console.log("=====   OUTPUT   =====");
console.log(Fibonacci(number));