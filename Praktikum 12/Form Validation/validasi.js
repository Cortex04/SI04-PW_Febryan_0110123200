document.getElementById('myForm').addEventListener('submit', function(valid) {
    valid.preventDefault();
    let nama = document.getElementById('nama');
    let email = document.getElementById('email');
    let jam = document.getElementById('jam');
    let tujuan = document.getElementById('tujuan');
    let tiket = document.getElementById('tiket');
    let errorNama = document.getElementById('errorNama');
    let errorEmail = document.getElementById('errorEmail');
    let errorJam = document.getElementById('errorJam');
    let errorTujuan = document.getElementById('errorTujuan');
    let errorTiket = document.getElementById('errorTiket');
    let hasil = document.getElementById('hasil');

    if (nama.value === '' || nama.value.length > 30) {
        errorNama.textContent = ' *nama tidak valid';
    } else {
        errorNama.textContent = '';
    }

    if (email.value === '' || !email.value.includes('@')) {
        errorEmail.textContent = ' *Email tidak valid';
    } else {
        errorEmail.textContent = '';
    }

    if (jam.value === '') {
        errorJam.textContent = ' *Jam tidak valid';
    } else {
        errorJam.textContent = '';
    }

    if (tujuan.value === '') {
        errorTujuan.textContent = ' *Tujuan tidak valid';
    } else {
        errorTujuan.textContent = '';
    }

    if (tiket.value === '' || tiket.value < 1 || tiket.value > 10) {
        errorTiket.textContent = ' *Jumlah tiket tidak valid';
    } else {
        errorTiket.textContent = '';
    }

    if (errorNama.textContent === '' && errorEmail.textContent === '' && errorJam.textContent === '' && errorTujuan.textContent === '' && errorTiket.textContent === '') {
        hasil.innerHTML = '<p>Nama Pelanggan: ' + nama.value + '</p><p>Email: ' + email.value + '</p><p>Jam Keberangkatan: ' + jam.value + '</p><p>Tujuan Keberangkatan: ' + tujuan.value + '</p><p>Jumlah Tiket: ' + tiket.value + '</p>';
    }
});