const button = document.querySelector('button')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

// input.addEventListener('input', () => {
//     if (input.value.trim() === '') {
//         button.disabled = true;
//     } else {
//         button.disabled = false;
//     }
// });

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const list_item = document.createElement('li');
        list_item.textContent = input.value;
        ul.append(list_item);
        input.value = '';
        // button.disabled = true;
    }
})
