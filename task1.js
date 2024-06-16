const list_items = document.querySelectorAll('li');

list_items.forEach(item => {
    item.addEventListener('click', () => {
        item.style.display = 'none';
    });
});