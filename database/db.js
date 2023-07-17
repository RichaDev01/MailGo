import mongoose from 'mongoose';




const Connection = ()=>{
    const DB_URI = 'mongodb+srv://Richa_garg:Richa_garg@gmail-clone.tkmm8lb.mongodb.net/?retryWrites=true&w=majority';
    try{
        mongoose.connect(DB_URI, {useNewUrlParser:true});
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;