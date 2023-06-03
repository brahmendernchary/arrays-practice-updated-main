// We can use the command pattern to encapsulate user actions like browsing products, adding items to the cart, and processing payments.

const userActions = {
    browseProducts: function (products) {
      console.log("Browsing products:", products);
    },
    addToCart: function (product, quantity) {
      ShoppingCart.addItem(product, quantity);
      console.log(`Added ${quantity} ${product.name} to cart`);
    },
    processPayment: function (paymentDetails) {
      paymentProcessor.processPayment(paymentDetails);
    },
  };
  
  function executeAction(action, ...args) {
    action(...args);
  }
  
  executeAction(userActions.browseProducts, [product1, product2]);
  executeAction(userActions.addToCart, product1, 1);
  executeAction(userActions.processPayment, { amount: 1000, method: "Credit Card" });

