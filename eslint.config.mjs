export default {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', // React 17+ no longer requires React to be in scope
        'prettier/prettier': 'error', // Enforce Prettier formatting
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional: enforce return types on functions
        '@typescript-eslint/no-explicit-any': 'warn', // Optional: warn when 'any' type is used
        'no-console': 'warn', // Optional: warn on console.log statements
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },
};
