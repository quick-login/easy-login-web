import 'whatwg-fetch' // jsdom 환경에서 fetch 제공
import '@testing-library/jest-dom'
import { server } from '@/__test__/__mocks__/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// ✅ Next.js navigation mock
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
  usePathname: () => '/mock-path',
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}))

global.scrollTo = jest.fn()
