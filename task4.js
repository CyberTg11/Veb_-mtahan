function tekrarlari_sil(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9, 9, 9, 1];
console.log(tekrarlari_sil(arr));
