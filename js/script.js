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
  #salary = 0;
  constructor (firstName, lastName, age, birthDayDate, jobPosition, salary) {
    super (firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    let YearSalary = this.#salary * 12;
    console.log(YearSalary);
  }
  celebrate() {
    let thisBirthday = new Date(this.birthDayDate);
    let thisYearBirthday = new Date (thisBirthday.setFullYear(2022));
    let day = thisYearBirthday.getDay();
    if (day == 6){
      console.log("Happy Birthday, let’s celebrate");
    }
    else if (day == 0){
      console.log("Happy Birthday, let’s celebrate");
    }
    else {
      console.log("Happy Birthday, but I need to work");
    }
    // console.log(thisYearBirthday);
  }
}
const employee = new Employee("bob", "mike", 30, "2000-08-22", "boss", 1200);
const person = new Person("luis", "john", 25, "1995-12-15");
console.log(employee);
employee.getYearSalary();
employee.celebrate();
console.log(person);
person.celebrate();