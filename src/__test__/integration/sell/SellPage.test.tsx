// import { SellList } from '@/widgets'
// import { cleanup, render, screen, waitFor } from '@testing-library/react'

// jest.mock('next-auth')
// // jest.mock('@/entities/sell/model/sell-action', () => ({
// //   ...jest.requireActual('@/entities/sell/model/sell-action'),
// //   userSellItemsAction: jest.fn().mockResolvedValue({
// //     success: true,
// //     code: 'E200',
// //     message: '성공',
// //     data: [
// //       {
// //         product_id: 1,
// //         name: '테스트',
// //         price: 10000,
// //         discountRate: 10,
// //         finalPrice: 9000,
// //       },
// //     ],
// //     pagination: {
// //       currentPage: 1,
// //       pageSize: 8,
// //       totalElements: 1,
// //       totalPages: 1,
// //     },
// //   }),
// // }))

// jest.mock('@/entities/sell/model/sell-action', () => ({
//   ...jest.requireActual('@/entities/sell/model/sell-action'),
//   userSellItemsAction: jest.fn(),
// }))

// const { userSellItemsAction } = require('@/entities/sell/model/sell-action')

// describe('<SellList />', () => {
//   afterEach(() => {
//     cleanup()
//     jest.resetModules()
//   })
//   it('데이터를 요청 받아 화면에 제공한다.', async () => {
//     userSellItemsAction.mockResolvedValueOnce({
//       success: true,
//       code: 'E200',
//       message: '성공',
//       data: [
//         {
//           product_id: 1,
//           name: '테스트',
//           price: 10000,
//           discountRate: 10,
//           finalPrice: 9000,
//         },
//       ],
//       pagination: {
//         currentPage: 1,
//         pageSize: 8,
//         totalElements: 1,
//         totalPages: 1,
//       },
//     })

//     render(<SellList />)

//     await waitFor(async () => {
//       const itemName = await screen.findByText('테스트')
//       expect(itemName).toBeInTheDocument()
//     })
//   })

//   it('데이터가 없을 경우 상품이 없다는 안내 문구를 제공한다.', async () => {
//     userSellItemsAction.mockResolvedValueOnce({
//       success: true,
//       code: 'E200',
//       message: '성공',
//       data: [],
//       pagination: {
//         currentPage: 1,
//         pageSize: 8,
//         totalElements: 1,
//         totalPages: 1,
//       },
//     })

//     render(<SellList />)

//     await waitFor(async () => {
//       const itemName = await screen.findByText('상품이 존재하지 않습니다.')
//       expect(itemName).toBeInTheDocument()
//     })
//   })
// })
