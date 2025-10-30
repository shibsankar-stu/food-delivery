import express from 'express';
import multer from 'multer';
import { addFood } from '../controlers/foodControler.js';

const foodRouter = express.Router();

//image upload
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
const upload = multer({storage:storage});   

foodRouter.post('/addfood', upload.single("image"), addFood);

export default foodRouter;