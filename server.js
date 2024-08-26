const express = require("express");
const cors = require("cors");
const connectDB =  require("./mongodb");
const shoeRoute =  require("./routes/shoeRoutes");


const app = express();


app.use(express.json());
app.use(cors());

PORT = 5000;

connectDB();

app.use("/api",shoeRoute);

app.listen(PORT , () => {
    console.log(`"Server is running at port" ${PORT}`);
    
})

