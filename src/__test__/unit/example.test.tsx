import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { UserButton } from './UserButton'
import { server } from '@/__test__/__mocks__/server'

test('버튼 클릭 시 유저 데이터를 불러와 화면에 표시', async () => {
  render(<UserButton />)
  fireEvent.click(screen.getByRole('button', { name: /load user/i }))
  await waitFor(() => expect(screen.getByTestId('user-info')).toHaveTextContent('John'))
})

test('에러 발생 시 에러 문구 노출', async () => {
  server.use(
    rest.get('https://api.example.com/user', (req, res, ctx) => {
      return res(ctx.status(503))
    }),
  )

  render(<UserButton />)
  fireEvent.click(screen.getByRole('button', { name: /load user/i }))
  await waitFor(() => expect(screen.getByTestId('user-info')).toHaveTextContent('에러발생'))
})
