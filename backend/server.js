import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';



//app config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;  

//middleware
app.use(cors());
app.use(express.json());


//database connection

//api endpoints
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/images', express.static('uploads'));
app.get('/', (req, res) => res.status(200).send('Hello World!'));


//listen

connectDb().then(() => {
    app.listen(port, () => console.log(`Listening on localhost:${port}`));
})

//mongodb+srv://<db_username>:<db_password>@cluster0.r2k07e0.mongodb.net/?