const tombol =document.getElementById("daftar")
tombol.onclick = daftar;

function daftar(e){
    e.preventDefault();

    const nama = document.getElementById("daf_nama").value;
    const email = document.getElementById("daf_email").value;
    const pw = document.getElementById("daf_pass").value;
    
    localStorage.setItem("Nama", nama);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pw);
    
    alert("Daftar akun berhasil, data tersimpan.");
    window.location.href ="index.html";
    
}

