const mongoose=require('mongoose')

const noteSchema=new mongoose.Schema({
    title:String,
    description:String,
})

const noteModel=mongoose.model("notes",noteSchema) // first part is 
// about the collection name in which we are putting in
//second part the design and the 
// format part

module.exports=noteModel