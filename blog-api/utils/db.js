const mongoose=require('mongoose')

let DB;

function connectDatabase(){
    return new mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}
function getDatabaseConnection(){
    if(!DB){
        DB=connectDatabase()
    }
    return DB
}


module.exports={
    getDatabaseConnection,
}