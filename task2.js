const button = document.querySelector('button')
const input = document.querySelector('input')
const ul = document.querySelector('ul')


button.addEventListener('click', () => {
        const list_item = document.createElement('li');
        list_item.textContent = input.value;
        ul.append(list_item);
        input.value = '';
})
