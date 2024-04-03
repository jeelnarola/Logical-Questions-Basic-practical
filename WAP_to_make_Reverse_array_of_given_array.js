
const reverse=(array)=>{
    let temp;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                temp=array[i];
                array[i]=array[j]
                array[j]=temp;
            }
        }
    }
    return array
}

console.log("=====   INPUT   =====");

let array=[1,2,3]
console.log("Array = ",array);
console.log("=====   OUTPUT   =====");
console.log("Reverse Array = ",reverse(array));