let array = [1, 2, 3, true, 'test', 1, false, undefined, null];

for (let i = array.length - 1; i >= 0; i--) {
    if (typeof array[i] !== 'number') {
        array.splice(i, 1);
    }
}
console.log(array);
