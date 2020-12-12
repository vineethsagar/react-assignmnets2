import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"


import postRouter from "./routes/Posts.js"
const app = express();

app.use('/posts',postRouter)

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors())

const CONNECTION_URL ="mongodb+srv://vineethsagar:435672mongodb@cluster0.uohvy.mongodb.net/<dbname>?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false)