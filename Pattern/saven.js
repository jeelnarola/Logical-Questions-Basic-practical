// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

const output=()=>{
    for(let i=5;i>=1;i--){
        let row=' '
        for(let j=5;j>=i;j--){
            if(j%2==1){
                row += 0 + " "
            }
            else{
                row += 1 + " "
            }
        }
        console.log(row);
    }
    return ' '
}
console.log("OUTPUT FIND ",'\n',5,'\n',5,4,'\n',5,4,3,'\n',5,4,3,2,'\n',5,4,3,2,1);
console.log("=====   OUTPUT   =====")
console.log(output());