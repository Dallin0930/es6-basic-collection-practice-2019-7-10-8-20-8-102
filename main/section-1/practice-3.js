'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return  collectionA.filter(cosA => { 
    return  (collectionB.value.find(cosB => cosA===cosB))!=null
  }     
  )
}
