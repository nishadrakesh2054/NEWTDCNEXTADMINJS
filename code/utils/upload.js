// /utils/upload.js
import multer from "multer";
import path from "path";
import fs from "fs";


// Path to the uploads folder
const UPLOADS_DIR = path.join(process.cwd(), "public/uploads");

// Ensure the uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Set up the storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Filter for allowed file types (image files)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed."), false);
  }
};

// Initialize multer with storage options and file filter
const upload = multer({ storage, fileFilter });

export const deleteFile = (filePath) => {
  const fullPath = path.join(UPLOADS_DIR, filePath);
  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error(`Failed to delete file: ${filePath}`, err);
    } else {
      console.log(`File deleted: ${filePath}`);
    }
  });
};

export default upload;
