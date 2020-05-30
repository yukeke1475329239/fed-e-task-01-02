//Hello  Word ==> 

const fp = require("lodash/fp")

const f = fp.flowRight(fp.replace(/\s+/g,"-"),fp.toLower);
console.log(f("Hello  Word"))