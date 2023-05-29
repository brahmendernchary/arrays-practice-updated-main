// Behavioral design patterns define the ways in which objects communicate with one another. These patterns ensure that objects can work together effectively while maintaining a clear separation of concerns.

// Factory Pattern
// The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass without specifying their concrete classes.

// It allows the creation of objects without exposing the instantiation logic to the client.

// This pattern is particularly useful when object creation is complex, when the environment influences object creation, when working with many small objects with shared properties, or when decoupling is required.

// Dealer A
const DealerA = {
    title() {
      return "Dealer A";
    },
    pay(amount) {
      console.log(`Set up configuration using username: ${this.username} and password: ${this.password}`);
      return `Payment for service ${amount} is successful using ${this.title()}`;
    }
  };
  
  // Dealer B
  const DealerB = {
    title() {
      return "Dealer B";
    },
    pay(amount) {
      console.log(`Set up configuration using username: ${this.username} and password: ${this.password}`);
      return `Payment for service ${amount} is successful using ${this.title()}`;
    }
  };
  
  function DealerFactory(DealerOption, config = {}) {
    const dealer = Object.create(DealerOption);
    Object.assign(dealer, config);
    return dealer;
  }
  
  const dealerFactoryA = DealerFactory(DealerA, {
    username: "user",
    password: "pass"
  });
  console.log(dealerFactoryA.title());
  console.log(dealerFactoryA.pay(12));
  
  const dealerFactoryB = DealerFactory(DealerB, {
    username: "user2",
    password: "pass2"
  });
  console.log(dealerFactoryB.title());
  console.log(dealerFactoryB.pay(50));

//   In this example, we define two dealer objects, DealerA and DealerB, each with their own title and pay methods. We then create a DealerFactory function that takes a dealer option and configuration as arguments.

//   The factory function creates a new dealer object with the specified dealer option as its prototype and assigns the given configuration to the new dealer object.
  
//   This allows us to create different dealer instances with different configurations while maintaining a consistent interface.

// Factory Pattern: User

// We’ll use the factory pattern to create instances of the User class. Users can be of different types, such as regular customers, premium customers, or administrators.

function UserFactory() {}

UserFactory.prototype.createUser = function (type, userDetails) {
  let user;

  if (type === "regular") {
    user = new RegularUser(userDetails);
  } else if (type === "premium") {
    user = new PremiumUser(userDetails);
  } else if (type === "admin") {
    user = new AdminUser(userDetails);
  } else {
    throw new Error("Invalid user type");
  }

  return user;
};

const userFactory = new UserFactory();
const regularUser = userFactory.createUser("regular", { name: "John Doe" });
