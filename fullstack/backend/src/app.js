// server ko config karna
const express=require("express")
const cors=require("cors")
const noteModel=require("./models/note.model")

const app=express()
app.use(express.json())

//cors part

app.use(cors())
// lets create api 
// notecreation
app.post("/notes", async (req,res)=>{
    const{title,description}=req.body
   const note=await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created",
        note
    })
})
//get method
app.get("/notes", async (req,res)=>{
    
   const note=await noteModel.find()
    res.status(201).json({
        message:"all notes are provided",
        note
    })
})
//delete
app.delete("/notes/:id",async (req,res)=>{
    const id=req.params.id
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"notes deleted successfully",
        
    })
})

//updation
app.patch("/notes/:id", async (req,res)=>{
    const id=req.params.id
    const {description}=req.body
    await noteModel.findByIdAndUpdate(id,{description})


    res.status(200).json({
        message:"note updated",
        
    })
})


module.exports=app