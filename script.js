// Daftar username yang diizinkan
const allowedUsers = ["admin", "user1", "user2"]; 

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputUser = document.getElementById("username").value;
    const status = document.getElementById("loginStatus");

    if (allowedUsers.includes(inputUser)) {
        status.innerText = "Login berhasil...";
        status.style.color = "lime";

        setTimeout(() => {
            window.location.href = "tools.html"; // pindah halaman
        }, 700);
    } else {
        status.innerText = "Username salah!";
        status.style.color = "red";
    }
});