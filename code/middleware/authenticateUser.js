import bcrypt from "bcrypt"; // Ensure you have bcrypt for password hashing
import Users from "../models/UserModel.js";

// Default admin credentials
const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};

// Function to authenticate users
const authenticate = async (email, password) => {
  // Check if it's the default admin
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve({ email: DEFAULT_ADMIN.email, role: "admin" });
  }

  const user = await Users.findOne({ email }); 
  console.log("user data", user);

  if (!user) {
    return null; 
  }

 
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return {
    email: user.email,
    role: user.role, 
  };
};

export default authenticate;
