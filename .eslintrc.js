module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'off', // Ejemplo para desactivar la regla no-console
    'no-unused-vars': ['warn', { args: 'none' }] // Ajustar la severidad de no-unused-vars a warning
    // Otras reglas que desees ajustar
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
