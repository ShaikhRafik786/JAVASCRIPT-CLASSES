const arr = [1,7,8,3,4,9,2,5,1];
let max = 0;
arr.forEach((element)  =>  {
 max = element > max ? element : max;
});
console.log(max);