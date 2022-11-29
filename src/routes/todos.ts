

import { Router } from 'express';
const router = Router();
 
import {getTodos,addTodo} from "../controllers/todoC";


router.post('/getExpenses/:name', getTodos)

router.post('/addExpense/:name',addTodo)

export default router ; 

























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

