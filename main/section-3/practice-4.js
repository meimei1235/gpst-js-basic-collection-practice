'use strict';

function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }
    return null;
}

function summarize(collection) {
    let result = [];
    collection.map(item => {
        let obj = find(result, item)
        obj ? obj.count++ : result.push({key: item, count: 1});
    });
    return result;
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.map(item => {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
        }
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB);
}
