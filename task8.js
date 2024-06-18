const array = [5,2,1,7,12,4];

console.log("Orijinal massiv:", array);

function Sirala(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const artanSira = Sirala(array);
console.log("Sıralanmış massiv:", artanSira);