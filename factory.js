//template ki jagab kam karega//
function getCircleArea(radius) {
  return {
    radius: radius,
    pi: 3.14,
    getArea: function () {
      return this.pi * this.radius * this.radius;
    },
  };
}
const CircleAreaOne = getCircleArea(5);
// console.log(CircleAreaOne);
const CircleAreaTwo = getCircleArea(10);
console.log(CircleAreaTwo);
