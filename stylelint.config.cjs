module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
  plugins: ['stylelint-scss', 'stylelint-order'],
};
