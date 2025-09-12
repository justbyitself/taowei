import importPlugin from "eslint-plugin-import"

export default [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: { import: importPlugin },
    rules: {
      "no-unused-vars": ["error", { "args": "after-used", "ignoreRestSiblings": true }],
      "import/extensions": ["error", "always", { js: "always" }],
      "no-var": "error",
      "prefer-const": ["error", {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }]
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js"],
          moduleDirectory: ["node_modules", "."]
        }
      }
    }
  }
]
