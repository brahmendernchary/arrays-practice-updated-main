// The singleton pattern is useful when only one instance of an object needs to be created, such as a database connection.

// This pattern ensures that only one instance can be created at a time and that the connection is closed before opening a new one.

// One drawback of this pattern is its difficulty in testing due to hidden dependencies, which are not easily isolated for testing.

class Database {
    constructor() {
      if (Database.instance) {
        return Database.instance;
      }
      Database.instance = this;
    }
  
    connect() {
      // Connection logic
    }
  }
  
  const db1 = new Database();
  const db2 = new Database();
  
  console.log(db1 === db2); // true


//   Singleton Pattern: PaymentProcessor

// For processing payments, we’ll use the singleton pattern to ensure that only one instance of the PaymentProcessor class exists. This prevents multiple instances from interfering with each other.

const PaymentProcessor = (function () {
    let instance;
  
    function createInstance() {
      return {
        processPayment: function (paymentDetails) {
          console.log("Processing payment:", paymentDetails);
        },
      };
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  const paymentProcessor = PaymentProcessor.getInstance();
  