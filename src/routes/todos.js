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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const Body = req.body;
    const newToDo = {
        id: new Date().toISOString(),
        text: Body.text
    };
    todos.push(newToDo);
    res.status(201).json({ message: ' added todos', todo: newToDo });
});
router.delete('/delete-todo/:id', (req, res, next) => {
    const Params = req.params;
    todos = todos.filter(todo => todo.id !== Params.id);
    res.status(200).json({ message: 'deleted', todos: todos });
});
router.put('/eddit-todo/:id', (req, res, next) => {
    const Body = req.body;
    const Params = req.params;
    const id = Params.id;
    const index = todos.findIndex(todoItem => todoItem.id === id);
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: Body.text };
        return res.status(200).json({ message: 'updated todo', todos: todos });
    }
    res.status(404).json({ message: 'could not find todo' });
});
exports.default = router;
