import Todo from "../models/todo"
import User from "../models/user"
import express from "express";
import {Request,Response} from "express"

import { todo } from '../models/todo';

import Redis from "redis";
const redisClient = Redis.createClient();

redisClient.on('error', (err) => console.log('Redis Client Error', err));



let todos: todo [] = [] 

type RequestBody = { text:string }
type RequestParams = { id : string}



const getTodos =  async (req:Request,res:Response)=>{

    try{
        console.log('inside get router');
        
        await redisClient.connect();
        const value = await redisClient.hGetAll("BACKEND_TASK")

        const data = value
   
        console.log('/////////');
        console.log(value);
        await redisClient.disconnect();

        
       res.status(200).json({
        data
       })
      


    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
       }

}

const addTodo = async (req:Request,res:Response)=>{

    const Body = req.body as RequestBody
    const {tname,tdescription,category}= req.body 
    var aid = 1;
    aid += 1;
    try{
        console.log('inside post router');
        const newToDo: todo = {
            id:new Date().toISOString(),
            text: tname.text 
        }

        
        todos.push(newToDo);

        await redisClient.connect();
        await redisClient.hSet("BACKEND_TASK",aid,tname);

        const value = await redisClient.hGetAll("BACKEND_TASK");

        var len = Object.keys(value).length;
        if(len>50){
            for(var i=0;i<Object.keys(value).length;i++){
                var newArr = [];
        
                newArr.push(Object.keys(value[i]))
    
                
                console.log(newArr);
               /// const{tname,tdescription,category} = newArr;
                const data = await  Todo.create({
                    tname,
                    tdescription,
                    category
                })
    
            }
            await redisClient.del('BACKEND_TASK');

            }

            await redisClient.disconnect();
                 
       res.status(201).json({newExpenseDetail: value})
    }

    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }



  
}





export {getTodos,addTodo}





