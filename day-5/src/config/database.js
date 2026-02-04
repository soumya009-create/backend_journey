const mongoose=require('mongoose')

function connectTodb(){
    mongoose.connect('mongodb+srv://soumya:NEMRHrnjMlm3UUXo@cluster0.ohlv0li.mongodb.net/day-5').then(()=>{
        console.log("database connected successfully .....")
    })
}

module.exports=connectTodb