// //pascal Notation : ex. One Two Three; every word in the name starts with 
// function Circle(radius) {
//     //radius: dynamic value,
//     this.rediuss = radius; //radiuss: 5 // the radius here is from the parameter
//    this.area = 20; // area: 20 the radius here is from the parameter which
//    console.log("check this---->",this);
//    this.draw = function () {
//        console.log("check this in method--->",this);
//        return
//    }


// function getCircleArea(redius) {
// //     this.radius = this.radius;
// //     this.pi = 3.14;
// //     this.getArea = function () {
// //     return this.pi * this.redius * this.redius;
// // };
// // return this;
// // }
// // const newObj = new getCircleArea(10);
// // console.log(newObj.getArea());


// // function GetFullName(function);

function GetPersonDetails(fname, lname, city) {
  this.firstName = fname;
  this.lastName = lname;
  this.city = city;
  this.getPersonInfo = function () {
    return "First Name: ${this.firstName} | Last Name: ${this.lastName} | City: ${this.city}";
  };
}
const newPerson = new GetPersonDetails("john", "bhai", "Nanded");
// const newPersonTwo = new GetPersonDetails("wick", "bhai", "Nanded");
// console.log(newPerson.getPersonInfo());
// const obj = {};
// obj.name = "somethings";
// console.log(obj);









