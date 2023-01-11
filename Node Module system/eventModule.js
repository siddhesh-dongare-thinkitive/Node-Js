const EventEmitter = require("events");
const emmitter = new EventEmitter(); //create one instance

//Register a listner
emmitter.on("messageLogged", function (arg) {
  console.log("Listner called", arg);
});

//raise an event
emmitter.emit("messageLogged", { id: 1, name: "John" });

//Register a listner
emmitter.on("login", (arg) => {
  console.log("login", arg);
});

//raise an event
emmitter.emit("login", { data: "Logged in successfully" });
