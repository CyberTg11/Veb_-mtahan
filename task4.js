let array = [1, 1, 1, 2, 3, 2, 4, 5, 7, 8];

console.log("Orijinal massiv:", array);

function elementi_sil() {
    let setArray = [...new Set(array)];
    return setArray;
}
let yeniArray = elementi_sil(array);
console.log("Tekrarlanan elementleri silinmiş massiv:", yeniArray);
