import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


//db is in another continent so if we request some database connection then there is needs of
// some time to getting reply from the server database thats why we use async await here in the function 
//of connecting the database
const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n mongodb connected!!! db host:${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("mongodb connection failed!!!: ",error);
        process.exit(1);
    }
}

export default connectDB