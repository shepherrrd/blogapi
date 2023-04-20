const express = require("express")
const app = express()
require('dotenv').config()
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const port = process.env.PORT || 3000
const postRouter = require("./routes/postRoutes")
app.use("/api/v1/posts",postRouter)
app.listen(port, ()=>{
    console.log("running");
})