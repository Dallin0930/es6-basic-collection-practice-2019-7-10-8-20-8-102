'use strict';

module.exports = function countSameElements(collection) {
  collection.reduce(
    (result,items) =>{
      if(result.find(params =>params.key==items))
      {
        result[item].count++
      }else{
        result[item]=1;
      }
    }
  )
  
  return result;
}
