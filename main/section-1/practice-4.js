'use strict';

module.exports =
    function collectSameElements(collectionA, objectB) {
    let result = [];
    let arr = collectionA.map(elem => {
        return elem.key;
    });
    result = arr.filter(elem => {
        return objectB.value.indexOf(elem) > -1;
    });
    return result;
}
/*
const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
];
const collectionB = {value: ['a', 'd', 'e', 'f']};
let a = collectSameElements(collectionA, collectionB);
console.log(a);*/
