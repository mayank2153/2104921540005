import express from "express"
import cors from "cors"
const app=express()
const port=3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("q2 backend")
})
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})