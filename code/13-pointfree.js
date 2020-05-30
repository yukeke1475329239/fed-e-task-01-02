//把一个字符串中的首字母提取并进行大写，使用 . 分割
//web wild word ==> W. W. W
const fp = require("lodash/fp")

const f = fp.flowRight(fp.join(". "),fp.map(fp.flowRight(fp.first,fp.toUpper)),fp.split(" "));
console.log(f("web wild word"))
