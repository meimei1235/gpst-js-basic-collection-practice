'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
    let  result = [];
    result = collectionA.filter(elem => {
        return collectionB.indexOf(elem) > -1;
    });
    return result;
}
