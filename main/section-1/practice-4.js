'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return  collectionA.map(cosA => cosA.key).filter(cosB=> { 
    return  (collectionB.value.find(cosB => cosA===cosB))!=null
  }     
  )
}

