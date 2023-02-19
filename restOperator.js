const getSum = (num1, num2, ...nums) => {
    console.log(nums);
    const numSum =nums.reduce((acc, cur)=> acc+cur);
    return num1 + num2 + numSum

};
console.log(getSum(10, 20, 30, 40, 50, 60, 70, 80));





