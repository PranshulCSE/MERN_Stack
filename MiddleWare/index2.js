const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("hello from middleware first");
    next();
    // return res.send("hello from middleware first");
});

app.use((req, res, next) => {
    console.log("hello from middleware second");
    //  return res.send("hello from middleware second");
    next();
});

app.get('/html/users', (req, res) => {
    const html = `<ol>
    ${users.map(user => `<li>${user.email}</li>`).join('')}
    </ol>`
    return res.send(html);
});


app.get('/users', (req, res) => {
    return res.send(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post("/rest/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./mock_data.json', JSON.stringify(users), (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.json({ message: 'User created successfully', id: users.length });
    });
});

app.patch("/rest/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    const user = users.find(u => u.id === id);
    if (!user) {
        return res.json({ message: 'User not found' });
    }
    Object.assign(user, body);
    fs.writeFile('./mock_data.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.json({ message: 'User updated successfully' });
    });
});


app.delete("/rest/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        return res.json({ message: 'User not found' });
    }
    users.splice(index, 1);

    fs.writeFile('./mock_data.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.json({ message: 'Internal server error' });
        }
        return res.json({ message: 'User deleted successfully' });
    });
});



app.listen(8000, () => {
    console.log(`server is listening on port 8000`);
});