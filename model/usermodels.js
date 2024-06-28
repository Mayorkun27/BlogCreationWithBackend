import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    Title : {
        type : "String",
        require : true
    },
    Message: {
        type : "String",
        require : true
    },
    File: {
        type : "String",
        require : true
    }
}, { timestamps : true })

export default mongoose.model("Blog", blogSchema)