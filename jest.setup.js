const { configure } = require('jest');

configure({
  setupFilesAfterEnv: ['./jest.setup.js'],
});