// The mediator pattern is a behavioral pattern that allows objects to communicate through a central hub, reducing the dependencies between objects.

// This pattern is useful when there are multiple objects interacting with one another, and direct communication would result in a tight coupling of objects.

function Chatroom() {
    this.users = {};
  }
  
  Chatroom.prototype.registerUser = function (username) {
    this.users[username] = new User(username, this);
  };
  
  Chatroom.prototype.send = function (message, fromUser, toUser) {
    if (this.users[toUser]) {
      this.users[toUser].receive(message, fromUser);
    } else {
      console.log(`${toUser} is not registered in the chatroom.`);
    }
  };
  
  function User(username, chatroom) {
    this.username = username;
    this.chatroom = chatroom;
  }
  
  User.prototype.send = function (message, toUser) {
    this.chatroom.send(message, this.username, toUser);
  };
  
  User.prototype.receive = function (message, fromUser) {
    console.log(`${fromUser} to ${this.username}: ${message}`);
  };
  
  const chatroom = new Chatroom();
  
  chatroom.registerUser("Alice");
  chatroom.registerUser("Bob");
  chatroom.registerUser("Charlie");
  
  chatroom.users["Alice"].send("Hello, Bob!", "Bob");
  chatroom.users["Bob"].send("Hey, Alice!", "Alice");
  chatroom.users["Charlie"].send("Hi, everyone!", "Bob");