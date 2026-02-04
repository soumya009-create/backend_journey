// server ko run karna
//database connection

const app=require('./src/app')
const connect_to_db=require('./src/config/database')



    // if there is no database with day-4 then it creates a new database with name of day 4
    //server & database



connect_to_db()
app.listen(3000,()=>{
    console.log("running on port number 3000")
})