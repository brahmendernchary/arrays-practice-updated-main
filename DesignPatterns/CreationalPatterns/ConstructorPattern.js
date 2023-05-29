// Creational design patterns deal with object creation mechanisms and provide ways to create objects in a system without specifying their concrete classes.

// These patterns allow developers to create objects flexibly and efficiently.

// Constructor Pattern
// The constructor pattern is a method used to initialize newly created objects once memory is allocated. It allows developers to create and initialize objects in a single step.
function Animal(name, species) {
    this.name = name;
    this.species = species;
  }
  
  Animal.prototype.speak = function () {
    console.log(`${this.name} says: Hello!`);
  };
  
  const dog = new Animal('Max', 'Dog');
  dog.speak(); // Max says: Hello!

//   The constructor pattern does not support inheritance.

// Constructor Pattern: Product
// We’ll use the constructor pattern to create instances of the Product class. Each product will have a name, price, and description.

function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  
  const product1 = new Product("Laptop", 1000, "A high-performance laptop");
  const product2 = new Product("Headphones", 150, "Noise-canceling headphones");