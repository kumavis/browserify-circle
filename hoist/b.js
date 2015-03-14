module.exports = ClassB

var ClassA = require('./a.js')

function ClassB(){
  this.data = 'b'
}

ClassB.prototype.neighbor = function() {
 return new ClassA()
}