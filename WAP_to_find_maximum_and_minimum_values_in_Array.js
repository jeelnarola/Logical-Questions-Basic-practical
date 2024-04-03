
const find=(number)=>{
    let max=array[0],min=array[0]
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        else{
            min=array[i]
        }
    }
    console.log("Array Max Element = ",max);
    console.log("Array MIN Element = ",min);
    return " "
}

console.log("=====   INPUT   =====");

let array=[1,2,0,4,5]
console.log(array);
console.log("=====   OUTPUT   =====");

console.log(find(array));