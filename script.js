const API = "https://YOUR_BACKEND_URL_HERE"; // ganti setelah deploy

document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const status = document.getElementById("loginStatus");

    const req = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username })
    });

    const res = await req.json();

    if (res.success) {
        status.innerText = "Login berhasil...";
        setTimeout(() => {
            window.location.href = "tools.html";
        }, 800);
    } else {
        status.innerText = "Username salah!";
    }
});