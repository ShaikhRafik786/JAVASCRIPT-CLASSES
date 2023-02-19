// const str="I am travelling to Hydrabad from Nanded.";

const max = str.split(" ").reduce((acc, curr) =>(acc.length > curr.length? acc:curr));
console.log(max);

//  let arr ="9922879883";

// //  let max = arr.split(" ").reduce((aac, curr)=>(aac.length>curr.length? aac:curr));

// //  console.log(max);
// let sk = arr.toLocaleString();
// console.log(sk)

// const isPlandraomCheck = (str) => {
//   const isPlandraom = str.split("").reverse("").join("");

//   if (str === isPlandraom) {
//     console.log("is palandrom");
//   } else {
//     console.log("is not palandrom");
//   }
// };
// isPlandraomCheck("madam");

