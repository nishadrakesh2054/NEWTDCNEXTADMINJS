import User from "../models/GetTouchModel.js";

// POST: Create a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Create and save the user
    const newUser = new User({ name, email, phone });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

// GET: Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};



export{
  registerUser,
  getAllUsers,
  
};
