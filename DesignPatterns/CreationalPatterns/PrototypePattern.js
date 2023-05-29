// The prototype pattern is based on prototypical inheritance, where objects are created to act as prototypes for other objects.

// Prototypes serve as blueprints for each object constructor created.

const animalPrototype = {
    speak() {
      console.log(`${this.name} says: Hello!`);
    },
  };
  
  function createAnimal(name, species) {
    const animal = Object.create(animalPrototype);
    animal.name = name;
    animal.species = species;
    return animal;
  }
  
  const cat = createAnimal('Milo', 'Cat');
  cat.speak(); // Milo says: Hello!

//   In this example, we define a prototype object (animalPrototype) that contains the shared methods and properties we want our animal instances to have. We then create a factory function (createAnimal) to create new animal instances that inherit from the animalPrototype.

// Prototype Pattern: Adding Discounts

// We can use the prototype pattern to add discount functionality to the Product class. This allows us to create discounted products without modifying the original Product class.

Product.prototype.getDiscountedPrice = function (discount) {
    return this.price - this.price * discount;
  };
  
  const discountedProduct = Object.create(product1);
  discountedProduct.discount = 0.1;
  
  console.log(`Discounted price: ${discountedProduct.getDiscountedPrice(discountedProduct.discount)}`);