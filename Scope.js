var userName = "Rafik";
function first(){
    console.log("globle variable--->", userName);
    if(userName==="Rafik"){
        console.log("Hello ${userName}");
    }
    function second() {
        console.log("This is second function--->${userName}");
    }       
}
console.log(userName);

// var userName = "Rafik";

// function first () {
//     console.log("globle variable--->", userName);
//     if (userName === "Rafik") {
//         console.log("Hello ${userName}" );
//     }

