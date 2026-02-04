const mongoose=require('mongoose')



function connect_to_db(){
    mongoose.connect("mongodb+srv://soumya:NEMRHrnjMlm3UUXo@cluster0.ohlv0li.mongodb.net/day-4")
    .then(()=>{
        console.log("connected to the database")
    })
}

module.exports=connect_to_db