
const Sum=(number)=>{
    let last=number%10;
    let count=1
   let temp=number
   let c=0;
    while(number>9){
            number=Math.floor(number/10)
            count++;
    }
    if(count==1){
        console.log("Digit = >",temp);
    }
    else{
        while(temp>9){
            c=Math.floor(temp%10)+c
            temp=Math.floor(temp/10)
        }
      console.log("Digit = >",c-last);  
    }
    return " "
}

let number=8983;
console.log(Sum(number));