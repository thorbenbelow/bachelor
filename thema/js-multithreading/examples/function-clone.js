'use strict';
function test() {
  return 0
}

Function.prototype.clone=function(){
    return eval( '('+this.toString()+')' );
}

const t1 = test.clone()

console.log(t1())
