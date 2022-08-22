"use strict";
//1
class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    let birthday = new Date(birthDayDate);
    this.birthDayDate = `${birthday.getFullYear()}.${birthday.getMonth()+1}.${birthday.getDate()}`;
  }

  celebrate() {
  console.log("Happy Birthday, let’s celebrate");
  }
}

class Employee extends Person {
  #salary = 1200;
  constructor (firstName, lastName, age, birthDayDate, jobPosition) {
    super (firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    let YearSalary = this.#salary * 12;
    console.log(YearSalary);
  }
  celebrate() {
    let date = new Date (this.birthDayDate);
    let day = date.getDay();
    if (day == 6){
      console.log("Happy Birthday, let’s celebrate");
    }
    else if (day == 0){
      console.log("Happy Birthday, let’s celebrate");
    }
    else {
      console.log("Happy Birthday, but I need to work");
    }
  }
}
const employee = new Employee("bob", "mike", 30, "2022-08-21", "boss");
const person = new Person("luis", "john", 25, "1995-12-15");
console.log(employee);
employee.getYearSalary();
employee.celebrate();
console.log(person);
person.celebrate();