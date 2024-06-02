import express from "express"
import cors from "cors"
const app=express()
const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend of Afford")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})