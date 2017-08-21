'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    /*for (let item of collectionA) {
        if (includes(collectionB[0], item)) {
            result.push(item);
        }
    }*/
    result = collectionA.filter(elem => {
        return collectionB[0].indexOf(elem) > -1;
    });
    return result;
}
