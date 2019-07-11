'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
     console.log("hello world!")

     return  collectionA.filter(cosA => { 
       return  (collectionB.filter(cosB => cosA==cosB)).length >= 20
       
     }     
          
     ) 
}






