// Structural design patterns are concerned with object composition and the structure of objects and classes.

// These patterns ensure that the elements in a system are organized in a way that allows them to work together effectively.


// Module Pattern
// The module pattern improves on the prototype pattern by setting different types of modifiers (both private and public) in the module.

// Developers can create similar functions or properties without conflicts, and they can rename functions publicly.

// However, this pattern does not allow developers to override created functions from the outside environment.

function AnimalContainer() {
    const container = [];
  
    function addAnimal(name) {
      container.push(name);
    }
  
    function getAllAnimals() {
      return container;
    }
  
    function removeAnimal(name) {
      const index = container.indexOf(name);
      if (index < 1) {
        throw new Error("Animal not found in container");
      }
      container.splice(index, 1);
    }
  
    return {
      add: addAnimal,
      get: getAllAnimals,
      remove: removeAnimal,
    };
  }
  
  const container = AnimalContainer();
  container.add("Hen");
  container.add("Goat");
  container.add("Sheep");
  
  console.log(container.get()); // Array(3) ["Hen", "Goat", "Sheep"]
  container.remove("Sheep");
  console.log(container.get()); // Array(2) ["Hen", "Goat"]

//   Module Pattern: ShoppingCart
//   For the shopping cart functionality, we’ll use the module pattern. It allows us to encapsulate private variables and expose public methods for adding, removing, and viewing the items in the cart.

const ShoppingCart = (function () {
    const items = [];
  
    function addItem(product, quantity) {
      items.push({ product, quantity });
    }
  
    function removeItem(product) {
      const index = items.findIndex((item) => item.product === product);
      if (index > -1) {
        items.splice(index, 1);
      }
    }
  
    function getItems() {
      return items;
    }
  
    return {
      addItem,
      removeItem,
      getItems,
    };
  })();
  
  ShoppingCart.addItem(product1, 1);
  ShoppingCart.addItem(product2, 2);