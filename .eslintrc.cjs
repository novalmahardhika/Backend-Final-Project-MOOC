module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        // "ecmaVersion": "latest"
        "sourceType": "module",
    },
    "ignorePatterns": ["*.spec.js"],
    "rules": {
        "no-unused-vars": [
            "off",
            // { "args": "all", "argsIgnorePattern": "^", "varsIgnorePattern": "^" }
          ]
    }
}
