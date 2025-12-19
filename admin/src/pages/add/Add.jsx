import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddFood = () => {
  const url = "http://localhost:4000";
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Food Data:", data);
    try {
      // Convert data object to FormData
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("image", data.image);
      const res = await axios.post(`${url}/api/food/addfood`, formData);
      if (res.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
        toast.success(res.data.message)
      } else {
        console.log("data not set");
        toast.error(res.data.message)
      }
      console.log("✅ Food added successfully:", res.data);
    } catch (error) {
      console.error("❌ Error adding food:", error);

    }
  };

  return (
    <div className="add-food">
      <h2>Add New Food Item</h2>

      <form className="add-food-form" onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="form-group image-upload">
          <label htmlFor="imageUpload">
            <img
              src={
                data.image
                  ? URL.createObjectURL(data.image)
                  : assets.upload_area
              }
              alt="upload preview"
            />
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </div>

        {/* Food Name */}
        <div className="form-group">
          <label>Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={data.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={data.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
