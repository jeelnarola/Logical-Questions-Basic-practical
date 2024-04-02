console.log("WAP to print reverse number of given number?");


const revers=(number)=>{
    let reversed=0,digit;

    while(number!=0){
        digit=number%10;
        reversed=(reversed*10)+digit;
        number=Math.floor(number/10)
    }
    return reversed;
}

let number=123;
console.log(revers(number));