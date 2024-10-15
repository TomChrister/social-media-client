import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    {
        files: ["*/.js", "*/.cjs", "*/.mjs"],
        rules: {
            "no-console": "warn",
            "no-var": "error",
            "eqeqeq": "error",
            "no-unsafe-optional-chaining": "error",
            "consistent-return": "error",
            "array-callback-return": "warn",
            "no-magic-numbers": ["warn", { "ignore": [0, 1] }]
        }
    }
];