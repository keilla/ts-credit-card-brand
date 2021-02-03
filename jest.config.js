module.exports = {
    globals: {
        'ts-jest': {
            diagnostics: false,
        }
    },
    testEnvironment: 'node',
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testRegex: '(test|spec)\\.(ts|js)$',
    testPathIgnorePatterns: ['dist']
};
