import mongoose from "mongoose";

const ManualRegSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Please provide a valid email address."],
    },
    address: {
      type: String,
      required: true,
    },
    ContactNo: {
      type: String,
      required: true,
    },
    DateOfBirth: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: [5, "Age must be at least 5 years old."],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
      minlength: [3, "School name must be at least 3 characters long."],
      maxlength: [255, "School name cannot exceed 255 characters."],
    },
    sports: {
      type: String,
      enum: ["Football", "Futsal", "Cricket", "Swimming", "Tennis"],
      required: true,
    },
    sportsCategory: {
      type: String,
      enum: ["Grassroots", "Intermediate", "Senior"],
      required: true,
    },
    trainingDays: {
      type: String,
      enum: ["Tuesday & Thursday", "Monday, Wednesday & Friday"],
      required: true,
    },
    trainingTime: {
      type: String,
      enum: ["3:00PM - 4:30PM", "4:30PM - 6:00PM"],
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    parentEmail: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Please provide a valid parent email address."],
    },
    parentContactNo: {
      type: String,
      required: true,
    },
    parentAddress: {
      type: String,
      required: true,
    },
    emergencyContactPersonName: {
      type: String,
      required: true,
    },
    emergencyContactPersonNumber: {
      type: String,
      required: true,
    },
    hasMedicalInsurance: {
      type: Boolean,
      default: false,
    },
    insuranceNo: {
      type: String,
      default: null,
    },
    hasMedicalCondition: {
      type: Boolean,
      default: false,
    },
    medicalDetails: {
      type: String,
      default: null,
    },

    transportation: {
      type: Boolean,
      default: false,
      
    },

    paymentType: {
      type: String,
      enum: ["Cash", "QR"],
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: [0, "Total amount must be a positive number."],
    },
    notes: {
      type: Boolean,
      required: false,
      default: false,
    },
    agreement: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const ManualReg = mongoose.model("ManualRegistration", ManualRegSchema);

export default ManualReg;
