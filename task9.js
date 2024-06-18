let array = [
    {
        id: 1,
        ad: 'Tebriz',
        soyad: 'Hesenli'
    },

    {
        id: 2,
        ad: 'Nihat',
        soyad: 'Memmedov'
    },

    {
        id: 3,
        ad: 'Nihat',
        soyad: 'Serkerov'
    },

    {
        id: 4,
        ad: 'Kamal',
        soyad: 'Sabanov'
    },

    {
        id: 5,
        ad: 'Kamil',
        soyad: 'Melikov',
    },

    {
        id: 6,
        ad: 'Mbappe',
        soyad: 'Klyian'
    },

    {
        id: 7,
        ad: 'Jude',
        soyad: 'Bellingham'
    }
];

function istifadeciSil(id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array.splice(i, 1); 
        }
    }
}

function istifadeciYenile(id, yeniAd, yeniSoyad) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array[i].ad = yeniAd; 
            array[i].soyad = yeniSoyad;
        }
    }
}

istifadeciSil(4);
console.log(array);

istifadeciYenile(2, 'Yusif', 'Sultanov');
console.log(array);