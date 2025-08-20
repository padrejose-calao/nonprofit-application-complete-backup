module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Turn off some strict rules that might cause issues in the existing codebase
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'off',
    'prefer-const': 'warn',
    'no-var': 'warn'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn'
      }
    }
  ]
};