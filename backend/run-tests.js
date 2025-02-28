import jest from 'jest';

const runTests = async () => {
  const argv = process.argv.slice(2);
  await jest.run(argv);
};

runTests();