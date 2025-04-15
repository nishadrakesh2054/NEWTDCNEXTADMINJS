import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,

    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },
    sports: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },

    parentName: {
      type: String,
      required: true,
    },
    parentEmail: {
      type: String,
      required: true,
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

    hasMedicalConditions: {
      type: String,
      required: true,
    },
    medicalDetails: {
      type: String,
      default: null,
    },
    hasMedicalInsurance: {
      type: String,
      required: true,
    },
    insuranceNo: {
      type: String,
      default: null,
    },
    transportation: {
      type: String,
      required: true,
    },

    prn: {
      type: String,
      unique: true,
      default: null,
    },
    notes: {
      type: Boolean,
      default: null,
    },

    agreement: {
      type: Boolean,
      default: null,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("Registration", RegistrationSchema);

export default Registration;
