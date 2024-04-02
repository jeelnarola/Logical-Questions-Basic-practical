console.log("WAP to check given number is palindrome or not?");




const palindrome=(number)=>{
    
    let palindromeNumber=0;
    let palindromeNumberStor=number;
    while(number!=0){
        let digit=number%10;
        palindromeNumber=(palindromeNumber*10)+digit;
        number=Math.floor(number/10)
    }
    
    if(palindromeNumber==palindromeNumberStor){
        return `Palindrome ${palindromeNumberStor}`
    }
    else{
        return `Not Palindrome ${palindromeNumberStor}`
        
    }
}

let number=121;
console.log("=====   INPUT   =====");
console.log("Enter Number :- ",number);
console.log("=====   OUTPUT   =====");
console.log("Enter Number Is ",number,"ANS IS Number A " ,palindrome(number));