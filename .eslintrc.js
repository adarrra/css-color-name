module.exports = {
    "extends": [
        "eslint:recommended",
        "es2015",
    ],
    "plugins": [
        "import",
        "jasmine"
    ],
    "env": {
     "browser": true,
     "node": true,
     "jasmine": true
 },
 "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
},
 "rules": {
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "comma-dangle": "off",
    "quotes": "off"
  }
};
