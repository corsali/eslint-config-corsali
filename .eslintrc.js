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
  plugins: ["jsx-a11y", "import"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules/*", "**/generated/*"],
  rules: {
    "no-unused-expressions": ["error", { allowTernary: true }],
    "no-underscore-dangle": "off",
    "no-nested-ternary": ["off"],
    "no-use-before-define": "off",
    "eol-last": ["error", "always"],
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
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-empty-interface": ["off"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/prop-types": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/react-in-jsx-scope": ["off"],
  },
};
