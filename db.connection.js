import mongoose from "mongoose";

const dbconnection =async () =>{


    try { await mongoose.connect(process.env.DB_URI_LOCAL);
        console.log('database connected succesfuly')
        
    } catch (error) {
        console.error('database connection failed: ',error);
        
    }
}
export default dbconnection