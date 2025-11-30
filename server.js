const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function loadUsers() {
    return JSON.parse(fs.readFileSync("users.json"));
}

function saveUsers(data) {
    fs.writeFileSync("users.json", JSON.stringify(data, null, 4));
}

app.post("/login", (req, res) => {
    const { username } = req.body;
    const data = loadUsers();

    const found = data.users.find(u => u.username === username);

    res.json({ success: !!found });
});

app.post("/adduser", (req, res) => {
    const { username } = req.body;

    let data = loadUsers();
    
    data.users.push({ username });
    saveUsers(data);

    res.json({ success: true });
});

app.listen(PORT, () => console.log("Backend aktif di port " + PORT));