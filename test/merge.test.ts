import { merge } from '../src/merge';

test('merge', () => {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
    expect(merge([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(merge([], [])).toEqual([]);
})