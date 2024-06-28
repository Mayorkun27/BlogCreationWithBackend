import path from "path"
import express from "express"
import connectDB from "./dB/connect.js"
import dotenv from "dotenv"
import blogRoute from "./routes/blogRoute.js"
import morgan from "morgan"
import colors from "colors"
const app = express()

dotenv.config();
connectDB();

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended : false }));

app.use("/", express.static(path.join(process.cwd(), "/public")));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/v1/blog", blogRoute)

const myPort = process.env.myPort || 5000
app.listen(myPort, () => {
    console.log(`Server running on port ${myPort} `.bgMagenta);
})