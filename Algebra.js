// for (let i=0; i<=1; i++);
function getNumber() {

    for (i = 0; i <= 100; i++)
        ;
    if (i % 2 === 0) {
        return "number is odd";
    }
    else {
        return "number is even";
    }
}

const rk=   getNumber();
console.log(rk);