const express=require("express");
const userDetails = require("./connection");
const app=express();
const port=3000;
app.use(express.json());
app.listen(port, ()=>{
    console.log("Server is started at port : "+port)
})

app.post("/", async(req, res)=>{
    try {
        const data=new userDetails(req.body);
        const savedata=await data.save();
        res.status(201).send(savedata);
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/users", async(req, res)=>{
    try {
        const getdata=await userDetails.find({})
        res.status(201).send(getdata)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/users/:id", async(req, res)=>{
try {
    const _id=req.params.id;
    const getuserbyid=await userDetails.findById({_id})
    
    res.status(201).send(getuserbyid)
} catch (error) {
    res.status(400).send(error)
}
})

app.patch("/update/:id", async(req, res)=>{
    try {
        const _id=req.params.id;
        const updateData=await userDetails.findByIdAndUpdate(_id, req.body, {new:true})
        res.status(201).send(updateData);
    } catch (error) {
        res.status(400).send(error)
        
    }
})

app.delete("/delete/:id", async(req, res)=>{
    try {
       const _id=req.params.id; 
        const deletedata=await userDetails.findByIdAndDelete({_id})
        res.status(201).send(deletedata)
    } catch (error) {
        res.status(500).send(error)
    }
})