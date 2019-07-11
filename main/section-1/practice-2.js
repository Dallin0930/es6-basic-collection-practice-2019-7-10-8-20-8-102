'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return  collectionA.filter(cosA => { 
    return  (collectionB[0].find(cosB => cosA===cosB))!=null
  }     
  )
}
