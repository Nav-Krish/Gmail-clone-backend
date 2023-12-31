const express=require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const authenticateUser=require('./middleware/authentication')

const connectDB=require('./db/connectDB')

const userRouter=require('./routes/user')
const emailRouter=require('./routes/email')

app.use(express.json())

app.use(cors({
    origin : "*",
    credentials : true,
    methods :["GET", "POST", "DELETE", "PUT", "PATCH"],
}))

app.use('/user',userRouter)
app.use('/mail',authenticateUser,emailRouter)
app.get('/',(req,res)=>{
    res.send('Gmail clone Backend')
})


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(5000,()=>console.log('Server is listening on port 5000...'))
    }catch(err){
        console.log(err);
    }
}
start()