import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'] //this file is run everytime i run the test.
}

export default createJestConfig(config)