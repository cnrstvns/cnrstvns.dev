module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'nonblock-statement-body-position': 'off',
    curly: 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'arrow-body-style': 'off',
    'react/no-array-index-key': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'newline-per-chained-call': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-alert': 'off',
    'no-else-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassign': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': 'off',
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'object-curly-newline': ['error', { minProperties: 5, multiline: true, consistent: true }],
    'react/forbid-prop-types': 'off',
    'func-names': 'off',
    'react/display-name': 'off',
  },
};
