"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("../src/merge");
test('merge', function () {
    expect(merge_1.merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge_1.merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge_1.merge([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
    expect(merge_1.merge([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
    expect(merge_1.merge([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(merge_1.merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(merge_1.merge([], [])).toEqual([]);
});
