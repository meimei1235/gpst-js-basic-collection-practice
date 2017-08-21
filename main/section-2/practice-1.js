'use strict';

function findElem(collection, ch) {
    return collection.find(elem => {
        return elem.key === ch;
    });
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(item => {
        let obj = findElem(result, item);
        obj ? obj.count++ : result.push({key: item, count: 1});
    });
    return result;
}
/*const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd', 'd', 'd', 'd', 'd'
];
let a = countSameElements(collection);
console.log(a);*/
