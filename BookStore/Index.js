const express = require('express');
const app = express();

const Books = [
    { id: 1, name: "C++", author: "Rohan" },
    { id: 2, name: "C", author: "Mohan" },
    { id: 3, name: "Java", author: "Sohan" },
    { id: 4, name: "JavaScript", author: "Ram" },
    { id: 5, name: "AI", author: "Rohit" },
    { id: 6, name: "CyberSecurity", author: "Rakesh" },
]

app.get("/book", (req, res) => {
    try{
        res.send(Books);
    }
    catch(err){
        res.send(err);
    }
})
app.get("/book/:id", (req, res) => {
    try {
        const id=parseInt(req.body);
        const Book= Books.find(Item=>Item.id===id);
        res.send(Book);
    }
    catch (err) {
        res.send(err);
    }
})

app.post("/book",(req,res)=>{
   const id=Books.length+1;
   const name=req.body.name;
   const author=req.body.author;
   const newBook={id,name,author};
   Books.push(newBook);
   res.send("Book added successfully");
})

app.patch("/book/:id",(req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const Book=Books.find(Item=>Item.id===id);
        if(!Book){
            res.send("Book not found");
        }
        const name=req.body.name;
        const author=req.body.author;
        if(name){
            Book.name=name;
        }
        if(author){
            Book.author=author;
        }
        res.send("Book updated successfully");
    }   
    catch(err){
        res.send(err);
    }       
})

app.delete("/book/:id",(req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const index=Books.findIndex(Item=>Item.id===id);
        if(index===-1){
            res.send("Book not found");
        }
        Books.splice(index,1);
        res.send("Book deleted successfully");
    }
    catch(err){
        res.send(err);
    }   
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})