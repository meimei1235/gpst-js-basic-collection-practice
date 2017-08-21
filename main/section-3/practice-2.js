'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}*/
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.map(item => {
        let key = item.key;
        let count = item.count;
        if (objectB.value.includes(key)) {
            count -=  parseInt(count / 3);
        }
        result.push({key, count});
    });
    return result;
}
