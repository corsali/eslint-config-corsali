module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      typescript: {},
    },
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "import"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  ignorePatterns: ["node_modules/*", "**/generated/*"],
  rules: {
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/prop-types": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "no-nested-ternary": ["off"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "eol-last": ["error", "always"],
    "@typescript-eslint/strict-boolean-expressions": ["warn"],
  },
};
