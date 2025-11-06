import '@testing-library/jest-dom'

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
