const Credentials = jest.fn(() => ({
  id: 'credentials',
  name: 'Credentials',
  type: 'credentials',
  authorize: jest.fn(),
}))

export default Credentials
