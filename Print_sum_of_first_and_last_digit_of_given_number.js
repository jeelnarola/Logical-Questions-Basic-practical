console.log("WAP to Print sum of first and last digit of given number?");

const sumOfDigits=(number)=>{
    let sum=0;
    let numberstr=number.toString()
   let first=Number(numberstr[0])
   let last=Number(number%10)
    return sum=first+last;
}

let number=12345;
console.log("Number = ",number,"IS",sumOfDigits(number));