/** @type {import('jest').Config} */
const config = {
    testPathIgnorePatterns: ["app/models/index.js"],
    coveragePathIgnorePatterns: ["app/models/index.js"]
};

module.exports = config;