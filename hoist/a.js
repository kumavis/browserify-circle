module.exports = ClassA

var ClassB = require('./b.js')

function ClassA(){
  this.data = 'a'
}

ClassA.prototype.neighbor = function() {
 return new ClassB()
}