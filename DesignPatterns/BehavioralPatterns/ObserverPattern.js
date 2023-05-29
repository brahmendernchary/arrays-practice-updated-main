// The observer pattern is useful when objects need to communicate with other sets of objects simultaneously.

// This pattern allows objects to modify the current state of data without unnecessary push and pull of events across states.

function Observer() {
    this.observerContainer = [];
  }
  
  Observer.prototype.subscribe = function (element) {
    this.observerContainer.push(element);
  };
  
  // The following removes an element from the container
  Observer.prototype.unsubscribe = function (element) {
    const elementIndex = this.observerContainer.indexOf(element);
    if (elementIndex > -1) {
      this.observerContainer.splice(elementIndex, 1);
    }
  };
  
  // Notify elements added to the container by calling each subscribed component
  Observer.prototype.notifyAll = function (element) {
    this.observerContainer.forEach(function (observerElement
  ) {
  observerElement(element);
  });
  };
  
  // Example of the observer pattern
  const observer = new Observer();
  
  function logElement(element) {
  console.log("Logging the element: ", element);
  }
  
  function alertElement(element) {
  console.log("Alerting the element: ", element);
  }
  
  function storeElement(element) {
  console.log("Storing the element: ", element);
  }
  
  observer.subscribe(logElement);
  observer.subscribe(alertElement);
  observer.subscribe(storeElement);
  
  observer.notifyAll("Hello!"); // Logs, alerts, and stores "Hello!"
  
  observer.unsubscribe(alertElement);
  
  observer.notifyAll("Goodbye!"); // Logs and stores "Goodbye!", but does not alert
  

//   Observer Pattern: Order Tracking

// We can use the observer pattern to implement order tracking. When an order is placed, multiple actions should be taken, such as updating the inventory, sending notifications, and creating invoices.

function OrderTracker() {
    this.observers = new Observer();
  }
  
  OrderTracker.prototype.placeOrder = function (orderDetails) {
    this.observers.notifyAll(orderDetails);
  };
  
  const orderTracker = new OrderTracker();
  
  function updateInventory(orderDetails) {
    console.log("Updating inventory for order:", orderDetails);
  }
  
  function sendNotification(orderDetails) {
    console.log("Sending order notification:", orderDetails);
  }
  
  function createInvoice(orderDetails) {
  console.log("Creating invoice for order:", orderDetails);
  }
  
  orderTracker.observers.subscribe(updateInventory);
  orderTracker.observers.subscribe(sendNotification);
  orderTracker.observers.subscribe(createInvoice);
  