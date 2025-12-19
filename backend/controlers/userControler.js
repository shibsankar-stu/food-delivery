import jwt from "jsonwebtoken";
import userModel from "../module/usermodel.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  const secretKey = "test";
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email and password" });
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email, id: user._id }, secretKey, {
    expiresIn: "1h",
  });
  res.status(200).json({ success: true, result: user, token, message: "Login Successful" });
};

const register = async (req, res) => {
  try {
    const secretKey = "test";
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      secretKey,
      { expiresIn: "1h" }
    );
    res.status(201).json({  success: true, user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { login, register };
