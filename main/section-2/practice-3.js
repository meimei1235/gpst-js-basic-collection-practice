'use strict';

function summarize(collection) {
    let result = [];
    collection.map(item => {
        let obj = findElem(result, item);
        obj ? obj.summary++ :  result.push({name: item, summary: 1});
    });
    return result;
}

function findElem(collection, ch) {
    for (let item of collection) {
        if (item.name === ch) {
            return item;
        }
    }
    return null;
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    let regex = /\[|\]|:|-/g;
    collection.map(item => {
        if (item.length === 1) {
            result.push(item);
        } else {
            let item_arr = item.replace(regex, ',').split(',');
            let item_key = item_arr[0];
            let item_count = parseInt(item_arr[1]);
            push(result, item_key, item_count);
        }
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
};