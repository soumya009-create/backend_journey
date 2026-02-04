// server ko config karna 
const ex=require("express")
const noteModel=require('./models/notes.model')
const app=ex()
app.use(ex.json())


app.post('/notes', async (req,res)=>{
    const{title,description}=req.body

   const note=await noteModel.create({
        title,description    // because of internet time and speed we never know when it will save on db 
        //that is why we use async await
    })
    res.status(201).json({
        message:'connected successfully',
        note
    })
})
app.get('/notes', async (req,res)=>{

   const note=await noteModel.find()

    res.status(200).json({
        message:'fetched successfully',
        note
    })
})








module.exports=app