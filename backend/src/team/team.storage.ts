import { diskStorage } from "multer";
import { extname } from 'path';

export const storage = diskStorage({
    destination: './uploads/profiles', // Specify the directory where the photos will be saved
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  })

// src/common/utils/storage.util.ts

// Utility function to create a storage configuration
export const createMulterStorage = (destination: string) => {
  return diskStorage({
    destination: (req, file, callback) => {
      callback(null, destination); // Use the dynamic destination provided
    },
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  });
};
