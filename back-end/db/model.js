import mongoose from "mongoose";
//DB9R1WL06zuEKdor
//connection
mongoose.connect("mongodb+srv://ushnodeyagroo2005:DB9R1WL06zuEKdor@clusterwrite.woomd6v.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWrite")
.then(()=> console.log("connected to database"))
.catch((err) => console.log(err));



const ArticleSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: false
    },
    updatedAt:{
        type: Date,
        required: false

    }
});

export default mongoose.model("Users", ArticleSchema);
