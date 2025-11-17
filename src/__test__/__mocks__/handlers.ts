import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.example.com/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        firstName: 'John',
      }),
    )
  }),

  // 판매 아이템 목록 조회
  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        code: 'E200',
        message: '성공',
        data: [
          {
            product_id: 1,
            name: '테스트1',
            price: 10000,
            discountRate: 10,
            finalPrice: 9000,
          },
          {
            product_id: 2,
            name: '테스트2',
            price: 10000,
            discountRate: 0,
            finalPrice: 10000,
          },
          {
            product_id: 3,
            name: '테스트3',
            price: 10000,
            discountRate: 50,
            finalPrice: 5000,
          },
        ],
        pagination: {
          currentPage: 1,
          pageSize: 8,
          totalElements: 1,
          totalPages: 1,
        },
      }),
    )
  }),
]
