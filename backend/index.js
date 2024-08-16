import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions ={
    origin:'https//localhost:5173',
    Credentials:true
}

app.use(cors(corsOptions));

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})