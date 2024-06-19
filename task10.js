let array = [1, 2, 3, true, 'test', 1, false, undefined, null];

function ededOlmayanlariSil(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] !== 'number') {
            arr.splice(i, 1);
        }
    }
}

ededOlmayanlariSil(array);
console.log(array);
