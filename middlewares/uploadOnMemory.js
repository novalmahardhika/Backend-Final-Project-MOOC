import multer from "multer";
import path from "path";

// Mendefinisikan gimana cara nyimpen file-nya
const storage = multer.memoryStorage();

export function uploadToMemory(req, res, next) {
    const upload = multer({storage}).single("image");
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json({
                status: "FAIL",
                message: `Failed to upload image: ${err.message}`
            });
            return;
        }
        next();
    });
}

// Membuat upload middleware
// export default multer({ storage });