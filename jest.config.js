module.exports = {
  clearMocks: true,
  coverageDirectory: "./coverage",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  // setupFiles: ["jest-canvas-mock"],
};
