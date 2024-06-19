const list_items = document.querySelectorAll('li');

list_items.forEach(item => {
    item.addEventListener('click', () => {
        item.style.display = 'none';
    });
});

// const ul = document.querySelector('.telebeler')

// if(ul){
//     ul.setAttribute('class', 'cenq')
//     let atribut = ul.getAttribute('class')
//     console.log(atribut)
    
// }
