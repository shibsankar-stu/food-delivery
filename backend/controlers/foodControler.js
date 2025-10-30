import foodModel from "../module/foodmodel.js";
import fs from "fs";

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
        res.status(201).json({ message: "Food item added successfully", food });
    } catch (error) {
        res.status(500).json({ message: "Error adding food item", error: error.message });
    }
}

export { addFood };
