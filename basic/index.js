const express = require("express");
require('dotenv').config();
const app = express();

let todos = [];

app.get('/', (req, res)=>{
    res.send("hello world");
});

app.get('/todo', (req,res)=>{
    res.send(todos);
})


app.post('/addtodo', (req, res) => {
  try {
    let data = req.body;   
    todos.push(data);

    res.status(201).json({
      message: "Todo added successfully",
      todos: todos
    });
  } catch (error) {
    res.status(500).json({
      error: "There was some error"
    });
  }
});

app.listen(process.env.PORT || 4000, ()=>{
    console.log("i am listning");
})