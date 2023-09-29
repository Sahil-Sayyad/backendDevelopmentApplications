import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import connectDb from "./config/mongoose";
import routes from "./routes";
connectDb();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors({
   credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', routes());

const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});