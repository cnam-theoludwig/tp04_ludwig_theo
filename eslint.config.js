import angular from "angular-eslint"
import configConventions from "eslint-config-conventions"
import tailwind from "eslint-plugin-tailwindcss"
import typescriptESLint from "typescript-eslint"

export default typescriptESLint.config(
  ...configConventions,
  ...tailwind.configs["flat/recommended"],
  {
    name: "config-eslint",
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    name: "config-eslint/typescript",
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": typescriptESLint.plugin,
    },
    rules: {
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },
  {
    name: "config-eslint/angular",
    files: ["**/*.ts"],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
  },
  {
    name: "config-eslint/angular-html",
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
  },
)
