import dotenv from 'dotenv';
import Mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT||3000;

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve("static")));


const pairSchema = Mongoose.Schema({
    "name1":{
        type:String,
        required:true
    },
    "name2":{
        type:String,
        required:true
    },
    "relation":{
        type:String,
        required:true
    }
})

const Pair = Mongoose.model("pairs",pairSchema)

async function connectToDatabase() {
    try {
        if(Mongoose.connection.readyState === 0)
            await Mongoose.connect(process.env.MongoDB_URL) 
            console.log("connected to mongoDB")       
    } catch (error) {
        console.error(error)
    }
} 

app.get("/",(req,res)=>{
    return res.status(200).sendFile(path.resolve("./static/index.html"))
})

app.post("/store",async(req,res)=>{
    try{
        console.log(req.body);
        await new Pair(req.body).save()
        return res.status(200).send({msg:"OK"})
    }
    catch(error){
        return res.status(400).send(error)
    }
})

app.listen(PORT,async()=>{
    await connectToDatabase();
    console.log(`started server at port ${PORT}`)
})
