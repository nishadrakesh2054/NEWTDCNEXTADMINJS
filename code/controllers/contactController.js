import Contact from "../models/contactModel.js";

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message, subject, notes } = req.body;
    // Input validation (basic example)
    if (!name || !email || !message || !subject) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required" });
    }
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
      subject,
      notes,
    });
    const savedContact = await newContact.save();

    res.status(201).json({
      message: "Contact created  sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating contact", error });
  }
};

// Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};
