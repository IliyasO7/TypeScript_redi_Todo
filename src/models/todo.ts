export interface todo{           //name exports when we write a export before a method it become a namedexport and not a default export
    id:string;
    text: string;
}


import { model, Schema } from "mongoose"

const todoSchema = new Schema({
    tname:{
        type:String,
        required:true
    },
    tdescription:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    }

})

export default model("Todo", todoSchema)
