const person3 = {
  firstName: "Rafik",
  lastName: "Shaikh",
  get fullName() {
    return "check p3 get--- ${person3.firstName} ${person3.lastName}";
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
console.log(person3.fullName);

person3.fullName = "The Lonawala  Ambawelly city";