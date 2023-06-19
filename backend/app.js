const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRouter = require("./routes/userRoutes");
const sectorRouter = require("./routes/sectorRoutes");
const productRouter = require("./routes/productRoutes");
const expressFileUpload = require("express-fileupload");
const cors = require("cors");
//para chatbot:
const ejs = require('ejs')

dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  expressFileUpload({
    createParentPath: true,
    limits: { filesize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Imagen demasiado grande",
    uploadTimeout: 0,
  })
);

app.use("/user", userRouter);
app.use("/sector", sectorRouter);

app.use("/product", productRouter);

//---------CHATBOT------

app.get('/', function (req,res){
res.render('../frontend/src/components/ChatBot/ChatBot')
})

module.exports = app;
