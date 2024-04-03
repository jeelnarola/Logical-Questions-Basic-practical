console.log("WAP to find sum of all array values and find Average of array");

const arrSumAndAverage=(number)=>{
    let sum=0,Average;
    Average=arr.length
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("Array All Element Sum = ",sum);
    console.log("Array Total Lengt = ",Average);
    console.log("Array All Element Sum / Total Length  = ",sum/Average);
    return " "
}
console.log("=====   INPUT   =====");

let arr=[10,10]
console.log("Array = ",arr);

console.log("=====   OUTPUT   =====");

console.log(arrSumAndAverage(arr));