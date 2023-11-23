const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'djsjnrfv0',
  api_key: '877239792134697',
  api_secret: 'QzYPQv6Pk-u0il5DW8pC-BAswDQ',
  secure: true,
});

module.exports = cloudinary;