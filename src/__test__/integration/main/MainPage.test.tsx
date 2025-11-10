import { render, screen } from '@testing-library/react'
import { MainPage } from '@/views'

jest.mock('next-auth')

describe('MainPage', () => {
  it('render Main', async () => {
    render(<MainPage />)
    const banner = await screen.findByText('이런 점이 좋아요')

    expect(banner).toBeInTheDocument()
  })
})
