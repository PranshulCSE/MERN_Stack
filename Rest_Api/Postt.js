const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 3000;

app.get("/html/users", (req, res) => {
    const html = `<ol>  
      ${users.map(
                (user) => `
        <li>
          <h5>First Name: ${user.first_name}</h5>
          <h5>Last Name: ${user.last_name}</h5>
          <h3>Email: ${user.email}</h3>
        </li>
      `).join("")}
    </ol>`;
    res.send(html);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});