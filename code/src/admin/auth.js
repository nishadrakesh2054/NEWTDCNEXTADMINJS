import bcrypt from "bcrypt";
import Users from "../../models/UserModel.js";

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: "password",
};

// Function to authenticate users
const authenticated = async (email, password) => {
  // Check if it's the default admin
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve({ email: DEFAULT_ADMIN.email, role: "admin" });
  }

  // Check for regular users in MongoDB
  const user = await Users.findOne({ email });

  if (!user) {
    return null; // User not found
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null; // Invalid password
  }

  // If authenticated, return the user's details (email, role)
  return {
    email: user.email,
    role: user.role, // Assuming roles are 'admin', 'user', etc.
  };
};

export default authenticated;
