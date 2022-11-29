//import express from 'express';

//@types/node hepes ts to traslate node js libraries and mekes it understandable

//typescript is deisgned by default for web browser
//adn there we dont have require we have import
/*
import express from 'express';

import bodyParser from 'body-parser'
import todosRooutes from './routes/todos' //alwasy pick defaultexport from file
//import express = require('express')

const app = express();
app.use(bodyParser.json());
app.use(todosRooutes);


app.listen(7000);*/


/* imp
import express from 'express' ;
import todoRouter from './routes/todos'
import bodyParser from 'body-parser';

const app =express();

app.use(bodyParser.json())

app.use(todoRouter);
app.listen(5000); imp*/


import  mongoose  from "mongoose";

import express from "express"


import path from "path";



import bodyParser from "body-parser";

import cors from "cors";



import todosRoutes from "./routes/todos";

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(todosRoutes);
app.use((req,res)=>{

    res.sendFile(path.join( __dirname, `views/${req.url}`))
})

/*
app.use((req:Request,res: Response)=>{

    res.sendFile(path.join( __dirname, `views/${req.url}`))
})
*/

/*
User.hasMany(Todo);
Todo.belongsTo(User);
*/


mongoose.connect('mongodb+srv://IliyasO7:K3M7cqxy7ymKz4qE@cluster0.eqgxahg.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen(5000);
   // console.log(ChildProcess);
    console.log('connected');
}).catch(()=>{
    console.log('error');
})




/*
sequelize.sync().then(() =>{
    console.log('Server started at 5000');

    app.listen(process.env.PORT || 5000); 
}).catch(()=>{
    console.log('error');
});
*/

