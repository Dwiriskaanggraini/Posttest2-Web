// const nama = localStorage.getItem("Nama");
// const tampilnm = document.getElementById("nm");
// const email = localStorage.getItem("Email");
// const tampilem = document.getElementById("email");
// const pw = localStorage.getItem("Password");
// const tampilpw = document.getElementById("pw");
// const gender = localStorage.getItem("Jenis Kelamin");
// const tampilgen = document.getElementById("gender");
// const usia = localStorage.getItem("usia");
// const tampilage = document.getElementById("age");
// const mefa = localStorage.getItem("Menu favorit");
// const tampilmefa = document.getElementById("mefa");
// const textarea = localStorage.getItem("Textarea");
// const tampilta = document.getElementById("ta");


// tampilnm.innerHTML = nama;
// tampilem.innerHTML = email;
// tampilpw.innerHTML = pw;
// tampilgen.innerHTML = gender;
// tampilage.innerHTML = usia;
// tampilmefa.innerHTML = mefa;
// tampilta.innerHTML = ta;

// const dataKeluhan = JSON.parse(sessionStorage.getItem('dataKeluhan'));
// const dataKeluhan = JSON.parse(sessionStorage.getItem('dataKeluhan'));
function riwayat(){
    let dataKeluhan = JSON.parse(sessionStorage.getItem('dataKeluhan'));
    // Ambil index terakhir
    let lastIndex = dataKeluhan.length - 1;
    // Ambil data pada index terakhir
    let dataTerakhir = dataKeluhan[lastIndex];

    document.getElementById('name').textContent = dataTerakhir.nama;
    document.getElementById('hari').textContent = dataTerakhir.hari;
    document.getElementById('isiemail').textContent = dataTerakhir.email;
    document.getElementById('keluhan').textContent = dataTerakhir.keluhan;
    document.getElementById('nomor').textContent = dataTerakhir.nomor;
    document.getElementById('kayu').textContent = dataTerakhir.kayu.join(', ');
    document.getElementById('gender').textContent = dataTerakhir.gender;
};

riwayat();