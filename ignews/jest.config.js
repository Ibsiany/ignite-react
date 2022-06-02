module.exports = {
    testPathIgnorePatterns: ['/mode_modules', '/.next'],
    roots: ["<rootDir>/src"],
  
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
  
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
  
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: 'jsdom',
    moduleNameMapper : {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    }
}