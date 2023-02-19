///--> while you declared by a variable as "var" then JS assign before it  declaration then JS will uplift declaration on top  /////


// console.log( accessThe variable / Functions Below Here to see the result);

//const  age = 25; wont be hoisted - throws ReferenceError//

//let name = "rk";  wont be hoisted - throws ReferenceError//

// var  address = "Nanded" ; will be hoisted but returns undefined as only the declaration is hoisted//initialization is not

// var getName = function () {
//     return "royal rk"; 
// }; won't to be hoisetd - throws undefined Error if you access only 
// the variable -throws type error if you call the expression


// const getAdress = ("rafik", "khan", "shaikh") => {
//     return "khan";
// }

// console.log(getAdress);
// const getAdress = () {
//     return  "Nanded";
// };
//  throws reference error if you console the function or its return

// Function getContact(){
//     return 9890072786;
// }  //will call the function and return the output as function declarations are hpisted

// var name;
// var name = "RAfik";
