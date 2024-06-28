import blogSchema from "../model/usermodels.js"
import colors from "colors"
import multer from "multer"

export const uploadBlog = async (req, res) => {
   try {
    const {Title, File, Message} = req.body
    const fileURL = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    //console.log(req.file.filename);
    if (!Title) {
        res.send("Enter a title for your post")
    }
    if (!req.file) {
        res.send("Enter a file for your post")
    }
    if (!Message) {
        res.send("Enter an article for your blog")
    }

    let date = new Date().getDate()
    let month = new Date().getUTCMonth()
    let year = new Date().getFullYear()
    const newBlog = await new blogSchema({Title, File: fileURL, Message}).save()
    res.status(200).send({
        success: true,
        msg: "Blog posted successfully",
        date: `${date}/${month}/${year}`,
        time: new Date().getTime(),
        newBlog
    })
    console.log(newBlog);
   } catch (error) {
    res.status(500).send({
        success : false,
        msg : error.message
    });
   }
}

export const getBlog = async (req, res) => {
    try {
        const allBlogs = await blogSchema.find();
        // console.log(allBlogs);
        res.json(allBlogs);
    } catch (error) {
        res.status(404);
        res.end(error)
    }
}