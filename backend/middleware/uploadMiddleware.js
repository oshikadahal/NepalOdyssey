import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = './uploads/';
        const packageName = req.body.name.replace(/\s+/g, '-'); // Assuming the package name is sent in the request body
        dir = `./uploads/${packageName}`;

        // Create the directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: (req, file, cb) => {
        if (!req.fileIndex) {
            req.fileIndex = 1;
        } else {
            req.fileIndex++;
        }
        cb(null, `${req.fileIndex}${path.extname(file.originalname)}`); // Rename the file as 1.jpg, 2.jpg, etc.
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // 10MB file size limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
});

export default upload;