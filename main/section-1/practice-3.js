'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    /*for (let item of collectionA) {
        if (includes(objectB.value, item)) {
            result.push(item);
        }
    }*/
    result = collectionA.filter(elem => {
        return objectB.value.indexOf(elem) > -1;
    });
    return result;
}
