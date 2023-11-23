const cloudinary = require("../config/cloudinary.js");

exports.uploadToCloudinary = (req, res, next) => {
  const fileBase64 = req.file.buffer.toString("base64");
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file,{folder: "BINAR"}, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        status: "FAIL",
        message: `Failed to upload image: ${err.message}`,
      });
    }
    
    req.image = result.secure_url;
    next();
  });
};
