module.exports = {
  clearMocks: true,
  coverageDirectory: "./coverage",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  // setupFiles: ["jest-canvas-mock"],
};
