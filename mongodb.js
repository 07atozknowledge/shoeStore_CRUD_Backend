const mongoose = require("mongoose");



const connectDB = async() => {
    await mongoose.connect("mongodb+srv://akd10251995:Star123456789@cluster0.7wt4t.mongodb.net/ShoeStore?retryWrites=true&w=majority&appName=Cluster0",)
    .then(() => console.log('DB connected !!'));
}
    

// const connectDB = () => 
//     mongoose
    //     .connect(
    //     "mongodb+srv://akd10251995:Star123456789@cluster0.7wt4t.mongodb.net/ShoeStore?retryWrites=true&w=majority&appName=Cluster0",

    //     {
    //         userNewUelParser : true,
    //         userUnifiedTopology: true
    //     }
    // )
    // .then(() => console.log("DB is connected"))
    // .catch(console.log("error"));
    

    // "mongodb+srv://akd10251995:Star123456789@cluster0.7wt4t.mongodb.net/ShoeStore?retryWrites=true&w=majority&appName=Cluster0",
module.exports = connectDB;