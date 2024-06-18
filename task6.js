document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const li = document.createElement('li');

    const inputValue = input.value;
    const ters_soz = inputValue.split('').reverse().join('');

    li.textContent =  ters_soz;

    document.querySelector('ul').appendChild(li);

    input.value = '';
});
