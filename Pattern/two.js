console.log("OUTPUT FIND",'\n',1,'\n',2,1,'\n',3,2,1,'\n',4,3,2,1,'\n',5,4,3,2,1);
const output=()=>{
    for(let i=1;i<=5;i++){
        let row=''
        for(let j=i;j>=1;j--){
            row += j + " "
        }
        console.log(row);
    }
    return ''
}

console.log("=====   OUTPUT   =====")
console.log(output());