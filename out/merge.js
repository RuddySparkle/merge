"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    var collection3 = new Array();
    var i = 0;
    var j = 0;
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            collection3.push(collection1[i]);
            i++;
        }
        else {
            collection3.push(collection2[j]);
            j++;
        }
    }
    if (i < collection1.length) {
        collection3 = collection3.concat(collection1.slice(i));
    }
    if (j < collection2.length) {
        collection3 = collection3.concat(collection2.slice(j));
    }
    return collection3;
}
exports.merge = merge;
