module.exports = {
  testEnvironment: "node", // Define que os testes rodarão em ambiente Node.js
  testMatch: ["**/test/**/*.test.js"], // Define o padrão de localização dos testes
  collectCoverage: true, // Ativa a cobertura de código
  collectCoverageFrom: ["app/**/*.js"], // Define quais arquivos serão analisados
  coverageDirectory: "coverage", // Pasta onde a cobertura será salva
  coverageReporters: ["text", "lcov"], // Formatos de saída do relatório de cobertura
  setupFilesAfterEnv: ["./jest.setup.js"], // Configurações extras (mocks, spies)
  silent: true, // Silencia logs para evitar poluição nos testes
};
