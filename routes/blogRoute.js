import { getBlog, uploadBlog } from "../controller/blogController.js";
import express from "express";
import path from "path";
import multer from "multer";
import cors from "cors"

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended : false }));

//Set up Multer storage configuration
const storage = multer.diskStorage({
    destination : function (req, File, cb) {
        //Specify the directory where uploaded files should be stored
        cb(null, "uploads/");
    },
    filename : function (req, File, cb) {
        //Generate a unique file name for the uploaded file
        cb(null, Date.now()  + path.extname(File.originalname))
    }
});

//Create Multer instance with configuration
const upload = multer({ storage : storage })

//Save uploaded images as static files
router.use("/uploads", express.static("uploads"))

router.use(cors())

router.post("/uploadBlog", upload.single("File"), uploadBlog)

router.get("/blogs", getBlog)
export default router;
