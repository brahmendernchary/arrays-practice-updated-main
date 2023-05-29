class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    speak() {
      console.log(`${this.name} says: Hello!`);
    }
  }
  
  const dog = new Animal('Max', 'Dog');
  dog.speak(); // Max says: Hello!

//   In the Class Pattern, we use the class keyword to define a class, which is essentially a blueprint for creating objects with a specific structure, properties, and methods. In this example, we have the Animal class with a constructor that initializes the name and species properties and a speak method.

// To create instances of the class, we use the new keyword followed by the class name and pass the required arguments, as shown in the example:

// const dog = new Animal('Max', 'Dog');

// The Class Pattern is popular in JavaScript because it provides a clean and organized way to define and create objects, making the code more readable and maintainable.

// Although it is syntactic sugar over JavaScript’s prototype-based inheritance, it provides a familiar syntax for developers coming from class-based languages like Java or C#.