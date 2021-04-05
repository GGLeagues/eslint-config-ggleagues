module.exports = {
    "extends": [
        "plugin:@angular-eslint/ng-cli-compat",
        "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
        "plugin:@angular-eslint/template/process-inline-templates"
    ],
    "plugins": [
        "eslint-plugin-react",
        "eslint-plugin-jasmine",
        "import-newlines"
    ],
    "rules": {
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": "app",
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": "app",
                "style": "camelCase"
            }
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/type-annotation-spacing": "off",
        "linebreak-style": ["error", "unix"],
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "semi": ["error", "always"],
        "operator-linebreak": [
            "error",
            "none",
            {
                "overrides": {
                    "?": "after",
                    ":": "after",
                    "&&": "after",
                    "||": "after"
                }
            }
        ],
        "no-underscore-dangle": 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/prefer-nullish-coalescing": 2,
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "no-public"
                }
            }
        ],
        "array-bracket-newline": [
            "error",
            {
                "minItems": 3,
                "multiline": true
            }
        ],
        "array-element-newline": [
            "error",
            {
                "ArrayExpression": {
                    "minItems": 3,
                    "multiline": true
                },
                "ArrayPattern": {
                    "minItems": 3,
                    "multiline": true
                }
            }
        ],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": "always",
                "ObjectPattern": {
                    "multiline": true
                },
                "ImportDeclaration": {
                    "multiline": true,
                    "minProperties": 3
                },
                "ExportDeclaration": {
                    "multiline": true,
                    "minProperties": 3
                }
            }
        ],
        "object-property-newline": "error",
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2],
        "function-call-argument-newline": ["error", "consistent"],
        "import-newlines/enforce": [
            "error",
            {
                "items": 2
            }
        ],
        "@typescript-eslint/comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "functions": "never",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "enums": "always-multiline",
                "generics": "never",
                "tuples": "never"
            }
        ],
        "comma-dangle": "off"
    },
    "env": {
        "jasmine": true
    }
}
