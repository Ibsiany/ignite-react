module.exports = {
    testPathIngorePatterns: ["/node_modules", "next"],
    setupFilesAfterEnv: [
        "<rootDir>/scr/tests/setupTests,ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: 'jsdom'
}