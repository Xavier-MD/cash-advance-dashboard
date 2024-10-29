module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app", // Use the recommended rules from create-react-app
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier", // Disables ESLint rules that might conflict with Prettier
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  rules: {
    // Customize your rules here
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
