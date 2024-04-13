console.log("=====   INPUT   =====")
console.log("\n","5","\n","4","5","\n","3","4","5","\n","2","3","4","5","\n","1","2","3","4","5")

const OutPut=()=>{
    for(let i=5;i>=1;i--){
        let row=''
        for(let j=i;j<=5;j++){
           row+=" "+j +" "
        }
        console.log(row);
    }
    return " "
}
console.log("=====   OUTPUT   =====")

console.log(OutPut());