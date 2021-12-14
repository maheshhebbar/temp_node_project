const mahesh = "mahesh";
const hebbar = "hebbar";

const sayHi = (name) => {
  console.log(`welcome ${name}`);
};

sayHi("Mahesh");
sayHi(mahesh);
sayHi(hebbar);

const names = require("./4-names.js");
//const sayHi = require("./5-utils");
const data = require("./6-alternative-export");
require("./7-mind-grenade");
