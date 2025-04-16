const {default : mongoose}= require("mongoose");
exports.connectDB= async()=>{
    try {
        // const connect = await mongoose.connect(process.env.MONGO_URL);
        const connect = await mongoose.connect("mongodb+srv://aa9884433:kaif123@expensetracker.gwujtby.mongodb.net/?retryWrites=true&w=majority&appName=expenseTracker");

        if(connect){
            console.log("MongoDb is connected");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

