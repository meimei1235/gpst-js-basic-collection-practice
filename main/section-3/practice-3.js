'use strict';

function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }
   /*collection.forEach(item => {
       if (item.key === ch) {
           return item;
       }
   });*/
    return null;
}

function summarize(collection) {
    let result = [];
    collection.map(item => {
        let obj = find(result, item);
        obj ? obj.count++ : result.push({key: item, count: 1});
    });
    return result;
}

function discount(collection, objectB) {
    let result = [];
    collection.map(item => {
        let key = item.key;
        let count = item.count;
        if (objectB.value.includes(key)) {
            count -= Math.floor(count / 3);
        }
        result.push({key, count});
    });
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB);
}
