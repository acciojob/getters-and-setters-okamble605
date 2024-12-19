// Define the Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Define the Student class extending Person
class Student extends Person {
  // Method for studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Define the Teacher class extending Person
class Teacher extends Person {
  // Method for teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
