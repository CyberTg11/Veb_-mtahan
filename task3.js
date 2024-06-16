const list_items = document.querySelectorAll('li');

list_items.forEach(item => {
    item.addEventListener('click', () => {
        list_items.forEach(li => {
            li.style.color = '';
        });
        
        item.style.color = 'red';
    });
});