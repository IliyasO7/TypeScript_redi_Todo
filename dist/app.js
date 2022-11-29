"use strict";
//import express from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(todos_1.default);

app.use((req, res) => {
    res.sendFile(path_1.default.join(__dirname, `views/${req.url}`));
});
/*
app.use((req:Request,res: Response)=>{

    res.sendFile(path.join( __dirname, `views/${req.url}`))
})
*/
/*
User.hasMany(Todo);
Todo.belongsTo(User);
*/
mongoose_1.default.connect('mongodb+srv://IliyasO7:K3M7cqxy7ymKz4qE@cluster0.eqgxahg.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(5000);
    // console.log(ChildProcess);
    console.log('connected');
}).catch(() => {
    console.log('error');
});
/*
sequelize.sync().then(() =>{
    console.log('Server started at 5000');

    app.listen(process.env.PORT || 5000);
}).catch(()=>{
    console.log('error');
});
*/
