import cloudinary from "../config/cloudinary.js"

export function uploadToCloudinary (req, res, next) {
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, { folder: "BINAR" }, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(400).json({
                status: "FAIL",
                message: `Failed to upload image: ${err.message}`,
            });
        }

        req.body.image = result.secure_url;
        next();
      });
}