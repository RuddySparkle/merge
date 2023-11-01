export function merge(collection1: number[], collection2: number[]): number[] {
    let collection3 = new Array<number>();
    let i = 0;
    let j = 0;
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            collection3.push(collection1[i]);
            i++;
        } else {
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