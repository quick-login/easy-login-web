import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '@/__test__/__mocks__/server'
import { SellList } from '@/widgets'

jest.mock('next-auth')

describe('<SellList />', () => {
  it('데이터를 요청 받아 화면에 제공한다.', async () => {
    render(<SellList />)

    await waitFor(async () => {
      const itemName = await screen.findByText('테스트1')
      expect(itemName).toBeInTheDocument()
    })
  })

  it('데이터가 없을 경우 상품이 없다는 안내 문구를 제공한다.', async () => {
    server.use(
      rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/list`, (req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            success: true,
            code: 'E200',
            message: '성공',
            data: [],
          }),
        )
      }),
    )

    render(<SellList />)

    await waitFor(async () => {
      const itemName = await screen.findByText('상품이 존재하지 않습니다.')
      expect(itemName).toBeInTheDocument()
    })
  })
})
