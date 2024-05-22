
const esModules = ['ol', 'd3', 'd3-color', 'd3-interpolate', 'delaunator', 'internmap', 'robust-predicates'].join('|');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [require.resolve('ts-jest'), { isolatedModules: true }],
  },
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`, // exclude es modules to prevent TS complaining
  ],
  globals: {
    __webpack_public_path__: '', // empty string
  },
};
