import express, { Request, Response, urlencoded } from 'express'; 
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import adminRoute from './routes/admin.route'

//Initialising app
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
    extended: true
}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

const PORT = process.env.PORT || 3000;



app.use('/api/admin', adminRoute);

//App listener
app.listen(PORT, () => {
    
    console.log("Listening on port:", PORT);
});