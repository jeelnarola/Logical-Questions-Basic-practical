// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
const Output=()=>{
    for(let i=1;i<=5;i++){
        let row=' '
        for(let j=1;j<=i;j++){
            // console.log(j," ");
            if(i%2==0){
                row+="*"+" "
            }else{
                row+=j+" "
            }
        }
        console.log(row);
    }
    return " "
}
console.log("OutPut Find",'\n',"*",'\n',"*","*",'\n',"*","*","*",'\n',"*","*","*","*",'\n',"*","*","*","*","*");
console.log("=====   OUTPUT   =====");
console.log(Output());