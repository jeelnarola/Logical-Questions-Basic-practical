console.log("Make table of given number:");

const table=(number)=>{
    for(let i=1;i<=10;i++){
        let a=number*i;
        console.log(number,"*", i,"=",a);
    }
    return " ";
}

let number=15;
console.log(table(number));