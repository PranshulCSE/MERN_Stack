const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { json } = require("stream/consumers");
const app = express();
const PORT = 3000;

// app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Middleware to convert data into Browser Friendly form

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


app.patch("/rest/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find((u) => u.id === id);
    if (!user) {
        return res.json({ Error: "User Not Found" });
    }
    Object.assign(user, body);
    return res.json({ message: "User updated Successfully" });
})

app.delete("/rest/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        return res.json({ Error: "User Not Found" });
    }
    users.splice(userIndex, 1);
    return res.json({ message: "User Deleted Successfully" });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});