const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;
const Todo = require('./utils/dataHelper');
const { CLIENT_RENEG_LIMIT } = require('tls');

const Public_Folder = path.join(__dirname, 'public');
app.use('/', express.static(Public_Folder));

let arr = [
    "Coding",
    "Cricket",
    "Dance",
    "Sing",
    "Play"
];
// app.get('/addtask', (req,res)=>{
//     const {task} = req.query;
//     arr.push(task);
//     res.send(arr);
// })
app.get('/addtask', (req,res)=>{
    const {task} = req.query;
    console.log("helllooo")
    
    Todo.addTask(task)
    .then(data=>{
        console.log("random");
        res.send(data);
    })
    .catch(err=>{
        res.send(err);
        console.log("not");
    })
})

app.get('/gettask', (req,res)=>{
    Todo.getTask()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err);
    })
})

app.get('/increasepriority', (req,res)=>{
    const {name} = req.query;
    console.log("Hi")
    Todo.increasePriority(name)
    .then(data=>{
        res.send(data);
        console.log("then")

    })
    .catch(err=>{
        res.send(err);
        console.log("catch")

    })
})

app.get('/decreasepriority', (req,res)=>{
    const {name} = req.query;
    Todo.decreasePriority(name)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err);
    })
})

app.get('/deletetask', (req,res)=>{
    const {task} = req.query;
    Todo.deleteTask(task)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err);
    })
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:`+PORT);
})