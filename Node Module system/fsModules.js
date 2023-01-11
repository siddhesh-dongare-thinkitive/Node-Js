const fs = require("fs");

const files = fs.readdirSync("./"); //To check files
console.log("Result", files);

fs.readdir("./", (err, files) => {
  if (err) console.log("error", err);
  else console.log("result", files);
});
