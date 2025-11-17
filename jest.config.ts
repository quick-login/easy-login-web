import dotenv from 'dotenv'
import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './src',
})

dotenv.config({ path: './.env.test' })

const config: Config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^next-auth$': '<rootDir>/__test__/__mocks__/next-auth.ts',
    '^next-auth/providers/credentials$': '<rootDir>/__test__/__mocks__/next-auth/providers/credentials.ts',
    '^next-auth/react$': '<rootDir>/__test__/__mocks__/next-auth/react.ts',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: ['/node_modules/(?!(@auth/core|next-auth)/)'],
}

export default createJestConfig(config)
