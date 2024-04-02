console.log("WAP to check given number is prime number or not?");


const prime=(number)=>{
    let count=0;
    for(let i=0;i<=number;i++){
        if(number%i==0){
            count++
        }
    }
    if(count==2){
        return `Number Is Prime number ${number}`;
    }
    else{
        return `Number Is NOT Prime Number ${number}`;
    }
}
console.log("=====   INPUT   =====");

let number=4;

console.log("Number = ",number);

console.log("=====   OUTPUT   =====");

console.log(prime(number));