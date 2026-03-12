const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { json } = require("stream/consumers");
const app = express();
const PORT = 3000;

// app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Middleware to convert data into Browser Friendly form

app.use((req,res,next)=>{
    console.log("Hello from middleware first");
    // return res.send("We are Ending ");
    next();
})

app.use((req, res, next) => {
    console.log("Hello from middleware Second");
    // return res.send("We are Ending ");
    next();
})


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

app.get("/user",(req,res)=>{
    res.send(users);
});
    




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});