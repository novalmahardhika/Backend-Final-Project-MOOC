// Require the Cloudinary library
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "da4wioxmv", // TODO: Ganti dengan cloudname-mu
  api_key: "811318132972564", // TODO: Ganti dengan API Key-mu
  api_secret: "dDTWDtk14NMWYQlqfrDnBwG4iYM", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

module.exports = cloudinary;