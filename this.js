// function GetFullName(fname, lname) {
// this.firstName = fname;
// this.lastName = lname;
// this.ratings = [5, 10, 15, 20, 25];
// this.getName = function () {
//     // const self = this;
// this.ratings.forEach(
//     function (elem) {
//         return console.log(this);
//     }.bind({ name: "Aslam", age: 25 })
// );
// };
// }
// const output = new GetFullName("sharuk", "asif");
// console.log(output.getName());

// function getFullName(fname, country) {
//   this.firstName = fname;
//   this.country = country;
//   this.data = [{ lname: "rk", city: "biloli" }];
//   this.getName = function () {
//     this.data.forEach(
//       function (elem) {
//         return console.log(
//           `firstname: ${this.firstName} LastName: ${elem.lname} city: ${elem.city} ${this.country}`
//         );
//       }.bind(this)
//     );
//   };
//   return this;
// }
// const output = new getFullName("rk", "india");
// console.log(output.getName());



// 1.if this is the inside of an object: This refers to a main object.//
//2.Even if you add a method from outside to the object: THis refers to the main object the method is being added to.
//3.if THis is inside a regular function : THis refers to window object in browser or globle in node //
//4.if THIS is inside a constructor function: This refers to the new object constructor functions create.//
//5.if THIS is inside a callback function, even if the callback function is a part of method main object: THis refers to window/globle object.//

//---->To Solve problems at point 3.//
const ratings = {
  title: ["IronMan", "Thor", "Captain America", "Hulk"],
  tags: "A+",
  ratings() {
    this.title.forEach(
        function (item) {
    //   return console.log("${item} ${this.tag}");
      console.log(this);
    }.bind(this)
    );
  },
};
console.log(ratings.ratings());


function getData () {
    return console.log(this);
}


////========//////THIS USE TO CALL<APPLY<BIND +++++++SUPER////////
function GetPersonDetails(fname, lname) {
// this.firstname = fname;
// this.lastname = lname;
// this.tags = [5, 10, 15, 20, 25];
// this.getDetails =function () {
// const result = this.tags.forEach((elem)  => {
//     console.log("${this.firstName} ${elem} ${this.lastName}");
//             } );
//     };
// }
// const output = new GetPersonDetails("john", "wick");
// console.log(output.getDetails(();


// const movies = {
//     firstName: "john",
//     lastName: "wick",
//     tags: [5, 10, 15, 20, 25],
//     getFullName() {
//         this.tags.forEach(
//             function (elem){
//                 return console.log(this.fname + elem + " " + this.lname);
//             }.bind({fname: "wick", lname: "john"})
//         );
//     },
// };
// const result = movies.getFullName();
// console.log(result);


function getName() {
    return console.log(this);
}
console.log(getName.bind({value: 40})());



