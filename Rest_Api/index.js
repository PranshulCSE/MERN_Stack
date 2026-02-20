const express = require ("express");
const users = require(`./MOCK_DATA.json`);
const app = express();
const Port=3000;

app.get('/users',(req,res)=>{
    return res.json(users);
})

app.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user =users.find(users=>users.id === id);
    return res.json(user);
}
)

app.listen(Port,()=>{
    console.log(`Server is running on Port ${Port}`);
})