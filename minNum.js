const arr=[1,23,4,6,7,9,4,3]
const arr2 = arr.reduce((acc,curr)=>(acc<curr?acc:curr))
console.log(arr2);