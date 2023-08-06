import express from "express";
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from "./config/domain/response.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express()
app.use(cors({origin: '*'}));

app.use(express.json()) //sends the respons in json format

app.get("/",(req,res)=> res.send({message: 'hello'}));


app.listen(PORT, ()=>console.log(`server is running on ${ip.address()}:${PORT}`));



// index -> init.sql -> config>mysqlconfig
// config -> domain -> response.js