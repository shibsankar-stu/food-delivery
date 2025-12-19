import foodModel from "../module/foodmodel.js";
import fs from "fs"
const addFood = async (req, res) => {
    const image = req.file.filename;
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const food = new foodModel({
            name,
            description,
            price,
            category,
            image
        });
        await food.save();
        res.status(201).json({ success: true, message: "Food item added successfully", food });
    } catch (error) {
        res.status(500).json({ message: "Error adding food item", error: error.message });
    }
}

const foodList = async (req, res) => {
    try {
        const food = await foodModel.find({})
        res.json({success: true, foods: food})
    } catch (error) {
        console.log(error)
        res.json({error: error})
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        if (!food) {
            res.json({status: 404, message: "food is not in your database"})
        }
        fs.unlink(`uploads/${food.image}`, () => {})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Food removed"})
    } catch (error) {
        console.log(error)
        res.json({error: error})
    }
}

export { addFood, foodList, removeFood};
