"use strict";
/*import {Router} from 'express';

import {Todo} from '../models/todo'; // we are dealing wiht name exports so {}

const todos: Todo[]  = [];

const router = Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos})
})

router.post('/todo', (req,res,next)=>{
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text:req.body.text
    };
    todos.push(newTodo)
});

export default router;
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../models/todo"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const redis_1 = __importDefault(require("redis"));
const redisClient = redis_1.createClient();
redisClient.on('error', (err) => console.log('Redis Client Error', err));
let todos = [];
router.post('/getExpenses/:name', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('inside get router');
        yield redisClient.connect();
        const value = yield redisClient.hGetAll("BACKEND_TASK");
        const data = value;
        console.log('/////////');
        console.log(value);
        yield redisClient.disconnect();
        res.status(200).json({
            data
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
    // res.status(200).json({ todos : todos })
}));
router.post('/addExpense/:name', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Body = req.body;
    const { tname, tdescription, category } = req.body;
    var aid = 1;
    aid += 1;
    try {
        console.log('inside post router');
        const newToDo = {
            id: new Date().toISOString(),
            text: tname.text
        };
        todos.push(newToDo);
        yield redisClient.connect();
        yield redisClient.hSet("BACKEND_TASK", aid, tname);
        const value = yield redisClient.hGetAll("BACKEND_TASK");
        var len = Object.keys(value).length;
        if (len > 50) {
            for (var i = 0; i < Object.keys(value).length; i++) {
                var newArr = [];
                newArr.push(Object.keys(value[i]));
                console.log(newArr);
                /// const{tname,tdescription,category} = newArr;
                const data = yield todo_1.default.create({
                    tname,
                    tdescription,
                    category
                });
            }
            yield redisClient.del('BACKEND_TASK');
        }
        yield redisClient.disconnect();
        res.status(201).json({ newExpenseDetail: value });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
    /* const newToDo: todo = {
         id:new Date().toISOString(),
         text: Body.text
     }
     todos.push(newToDo);
     res.status(201).json({message: ' added todos' , todo:newToDo})*/
}));
/*
router.post('/todo', (req,res,next)=>{

    const Body = req.body as RequestBody

    const newToDo: todo = {
        id:new Date().toISOString(),
        text: Body.text
    }
    todos.push(newToDo);
    res.status(201).json({message: ' added todos' , todo:newToDo})
})

router.delete('/delete-todo/:id' , (req,res,next)=>{
    const Params = req.params as RequestParams
    todos = todos.filter(todo => todo.id !== Params.id)
    res.status(200).json({message:'deleted' , todos:todos})
})

router.put('/eddit-todo/:id' , (req,res,next)=>{
    const Body = req.body as RequestBody
    const Params = req.params as RequestParams

    const id = Params.id ;
    const index = todos.findIndex(todoItem => todoItem.id === id);
    if(index >= 0 ){
        todos[index] = { id: todos[index].id , text:Body.text};
        return res.status(200).json({message: 'updated todo' , todos : todos})
    }
    res.status(404).json({message:'could not find todo'})
})*/
exports.default = router;
//********************0 */
/*
import {Router} from 'express';




//const TodoController = require('../controllers/todo');
//const userController = require('../controllers/users');


const newTodo = require('../models/todo');

//import {Todo} from '../models/todo'
/*
const todos:newTodo[] = [];

*/
//const router = Router();
/*
router.post('/signup', userController.signup)

router.post('/login',userController.login)

router.post('/getExpenses/:name',TodoController.getTodo);



router.post('/addExpense/:name',TodoController.addTodo);

router.delete('/deleteExpense/:userId',TodoController.deleteTodo);


*/
//export default router;
