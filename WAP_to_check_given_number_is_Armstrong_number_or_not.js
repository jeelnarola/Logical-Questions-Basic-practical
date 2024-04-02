
console.log("WAP to check given number is Armstrong number or not?");


const armstrong=(number)=>{
    let ArmstrongSum=0,digit;
    let ArmstrongStor=number;
    while(number>0){
        digit=number%10;
        ArmstrongSum=(digit*digit*digit)+ArmstrongSum; 
        number=Math.floor(number/10);
    }
    if(ArmstrongSum==ArmstrongStor){
        return `Number Is ArmstrongStor ${ArmstrongStor}`
    }
    else{
        return `Number Is NOT ArmstrongStor ${ArmstrongStor}`
    }
}

console.log("=====   INPUT   =====");

let number=0;
console.log("Number = ",number);

console.log("=====   OUTPUT   =====");


console.log(armstrong(number));