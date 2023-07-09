/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },  
  extends: [
    'eslint:recommended',   
    'plugin:@typescript-eslint/recommended',
  ],      
  parser: '@typescript-eslint/parser',      
  parserOptions: {
    project: ["./eslint-tsconfig.json"],    
    tsconfigRootDir: __dirname 
  },  
  plugins: ['react-refresh'],
  rules: {   
    '@typescript-eslint/no-non-null-assertion': 'off', 
  },
  "include": ["src/**/*.ts", "jest-setup.ts"]
}