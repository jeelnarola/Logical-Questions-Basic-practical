console.log("WAP to find a factorial of given number.");

const factorial=(number)=>{
    // return number
    let fact=1;
    for(let i=1;i<=number;i++){
        fact *= i;
    }
    return fact;
}


console.log("=====   INPUT   =====");

let number=125;

console.log("Number = ",number);

console.log("=====   OUTPUT   =====");

console.log("Number ",number," Factorial ANS = ",factorial(number));