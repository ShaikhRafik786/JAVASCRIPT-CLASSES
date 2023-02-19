// class PersonName {
//   constructor(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//   }
//   getPersonName() {
//     const details = "First Name: ${this.firstName} Last Name: ${this.lastName}";
//     return details;
//   }
// }
// // console.log(new Person("Rafik", "khan").getPersonName);
// const firstPerson = new PersonName("Rafik", "rk");
// // console.log(firstPerson.getPersonName);
// class PersonContact extends PersonName {
//   constructor(fname, lname, email, phone, city) {
//     super(fname, lname);
//     this.email = email;
//     this.phone = phone;
//     this.city = city;

//   }
// }
// const firstPersonContact = new PersonContact(
//   "Rafik",
//   "rk",
//   "srkark@786.com",
//   9853541210,
//   "Biloli",

// );
// console.log(firstPersonContact);
// console.log(firstPerson);
// // console.log();

// class personDetails {
//   constructor (fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//   }

// getPersonName() {
//   const personName = 'First Name: ${this.firstName} Last Name: ${LastName}';
//   return personName;
// }
// }
// console.log(firstPerson.firstName);

// class Employee {
//   constructor(givenName, givenExperience, givenDivision) {
//     this.name = givenName;
//     this.experience = givenExperience;
//     this.division = givenDivision;
//   }
//   slogan() {
//     return "I am ${this.name} and this company is the best";
//   }
//   joiningYear() {
//     return 2020 - this.experience;
//   }
//   static add(a, b) {
//     return a + b;
//   }
// }
// class Programmer extends Employee{
   
// }
// rafik = new Employee("rafik", 35, "division");
// console.log(rafik); 
// console.log(rafik.joiningYear()); 
