import Joi from "joi";

const preCheckSchema = Joi.object({
  fullName: Joi.string().min(3).max(255).required(),
  address: Joi.string().min(3).max(255).required(),
  contactNo: Joi.string()
    .pattern(/^\d+$/)
    .min(10)
    .max(15)
    .required()
    .messages({
      "string.pattern.base": "Contact number should contain digits only.",
      "string.min": "Contact number must be at least 10 digits.",
      "string.max": "Contact number must not exceed 15 digits.",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
  }),
  dob: Joi.date().iso().required().messages({
    "date.base": "Date of birth must be a valid date.",
    "any.required": "Date of birth is required.",
  }),
  age: Joi.number().min(1).max(150).required(),

  gender: Joi.string().required(),
  schoolName: Joi.string().min(3).max(255).required(),

  parentName: Joi.string().min(3).max(255).required(),
  parentEmail: Joi.string().email().required(),
  parentContactNo: Joi.string()
    .pattern(/^\d+$/)
    .min(10)
    .max(15)
    .required()
    .messages({
      "string.pattern.base": "Parent contact should contain digits only.",
      "string.min": "Parent contact must be at least 10 digits.",
      "string.max": "Parent contact must not exceed 15 digits.",
    }),
  parentAddress: Joi.string().min(3).max(255).required(),

  sports: Joi.string().required(),
  category: Joi.string().required(),
  time: Joi.string().required(),
  days: Joi.string().required(),

  emergencyContactPersonName: Joi.string().min(3).max(255).required(),
  emergencyContactPersonNumber: Joi.string()
    .pattern(/^\d+$/)
    .min(10)
    .max(15)
    .required()
    .messages({
      "string.pattern.base":
        "Emergency contact number should contain digits only.",
      "string.min": "Emergency contact must be at least 10 digits.",
      "string.max": "Emergency contact must not exceed 15 digits.",
    }),

  hasMedicalConditions: Joi.string().valid("yes", "no").required().messages({
    "any.required": "Please specify if you have medical conditions.",
    "any.only": "Only 'yes' or 'no' is allowed.",
  }),
  medicalDetails: Joi.when("hasMedicalConditions", {
    is: "yes",
    then: Joi.string().min(3).required().messages({
      "string.base": "Medical details must be a string.",
      "any.required": "Please provide medical details.",
    }),
    otherwise: Joi.string().optional().allow(""),
  }),

  hasMedicalInsurance: Joi.string().valid("yes", "no").required().messages({
    "any.required": "Please specify if you have medical insurance.",
    "any.only": "Only 'yes' or 'no' is allowed.",
  }),
  insuranceNo: Joi.when("hasMedicalInsurance", {
    is: "yes",
    then: Joi.string().min(3).required().messages({
      "string.base": "Insurance number must be a string.",
      "any.required": "Please provide your insurance number.",
    }),
    otherwise: Joi.string().optional().allow(""),
  }),

  transportation: Joi.string().required().messages({
    "boolean.base": "Transportation required must be yes or no.",
    "any.required": "Please specify if you need transportation.",
  }),

  amount: Joi.number().min(1).required().messages({
    "number.base": "Amount must be a valid number.",
    "number.min": "Amount must be at least 1.",
  }),

  paymentMethod: Joi.string()
    .valid("fonepay", "esewa", "khalti")
    .required()
    .messages({
      "any.only": "Select a valid payment method.",
    }),

  prn: Joi.string().optional().allow(""),
  notes: Joi.boolean().optional(),

  agreement: Joi.boolean().valid(true).required().messages({
    "any.only": "You must agree to the terms.",
  }),
});

export default preCheckSchema;
