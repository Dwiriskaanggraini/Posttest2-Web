const form = document.getElementById("format");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const loc_email = localStorage.getItem("Email", email);
    let loc_pass = localStorage.getItem("Password", pass);
  
    if(email.value == loc_email && pass.value == loc_pass){
        alert("Berhasil masuk");
        window.location.href ="beranda.html";
    }else{
        alert("Mohon periksa kembali email/password Anda");
    }
})
