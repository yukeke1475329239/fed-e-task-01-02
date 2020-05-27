//演示lodash
//first,last,toUpper,reverse
const _ = require("lodash")
const { log } = console

let arr = ["jack","tom","kate"]

log(_.first(arr))
log(_.last(arr))
log(_.toUpper(_.first(arr)))
// log(_.reverse(arr))
// let r = _.each(arr,(item,key)=>{
//   console.log(item,key)
// })
// log(r)
// log(_.includes(arr,"tom1"))
// log(_.find("k"))

// log(_.findIndex("jack"))
