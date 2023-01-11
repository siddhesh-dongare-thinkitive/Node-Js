const os = require("os");

let freeMemory = os.freemem();
console.log("Free Memory: " + freeMemory);
let totalMemory = os.totalmem();
console.log("Total Memory: " + totalMemory);
let machine = os.machine();
console.log(machine);
let type = os.type();
console.log(type);
let uptime = os.uptime();
console.log(uptime);
