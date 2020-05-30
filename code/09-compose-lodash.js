const _ = require("lodash")

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const compost = _.flowRight(toUpper,first,reverse)
console.log(compost(["jack","tom","kake"]))



