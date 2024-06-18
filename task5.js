let array = [
    {
        ad: 'Tebriz',
        soyad: 'Hesenli',
        giris_bali: 48,
        imtahan_bali: 17
    },

    {
        ad: 'Nihat',
        soyad: 'Memmedov',
        giris_bali: 47,
        imtahan_bali: 17
    },

    {
        ad: 'Nihat',
        soyad: 'Serkerov',
        giris_bali: 45,
        imtahan_bali: 17
    },

    {
        ad: 'Kamal',
        soyad: 'Sabanov',
        giris_bali: 48,
        imtahan_bali: 17
    },

    {
        ad: 'Kamil',
        soyad: 'Melikov',
        giris_bali: 50,
        imtahan_bali: 17
    },

    {
        ad: 'Mbappe',
        soyad: 'Klyian',
        giris_bali: 48,
        imtahan_bali: 15
    },

    {
        ad: 'Bellingham',
        soyad: 'Jude',
        giris_bali: 33,
        imtahan_bali: 17
    }
];

function kesilenTelebeleriSil(telebe) {
    for (let i = telebe.length - 1; i >= 0; i--) {
        let umumi_bal = telebe[i].giris_bali + telebe[i].imtahan_bali;
        if (umumi_bal < 51 || telebe[i].imtahan_bali < 17) {
            telebe.splice(i, 1);
        }
    }
}

kesilenTelebeleriSil(array);
console.log(array);
