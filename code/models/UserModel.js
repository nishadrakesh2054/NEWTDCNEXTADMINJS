import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  name: { type:String , required: true },
  role: {
    type: String,
    enum: ["admin", "sub-admin", "editor"],
    default: "editor",
  },
  password: { type: String, required: true },
});

const Users = mongoose.model("User", userSchema);

export default Users;
