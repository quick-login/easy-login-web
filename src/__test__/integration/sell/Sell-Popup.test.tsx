import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { act } from 'react'
import { server } from '@/__test__/__mocks__/server'
import { SellListItem } from '@/entities/sell'
import { useModalStore, useSellStore } from '@/shared/store'
import { SellPage } from '@/views'

jest.mock('next-auth')

describe('<sell-popup />', () => {
  beforeEach(() => {
    // 모달 상태 초기화
    useSellStore.setState({ list: new Map() })
    useModalStore.setState({
      isAdminSell: false,
      isUserSell: false,
      isOrder: false,
      isEmail: false,
    })
  })
  afterEach(() => {
    server.resetHandlers()
    useSellStore.getState().clearList()
    useModalStore.setState({
      isAdminSell: false,
      isUserSell: false,
      isOrder: false,
      isEmail: false,
    })
  })
  it('상품을 클릭해 담으면 store에 반영되고, 모달이 열리면 해당 상품이 보인다.', async () => {
    render(<SellPage />)

    // 서버에서 상품들이 불러와질 때까지 대기
    const items = await screen.findAllByText(/테스트[0-9]/)
    expect(items).toHaveLength(3)

    // // 상품 담기 버튼 클릭
    const addButton = await screen.findAllByRole('button', { name: /상품 담기/i })
    expect(addButton).toHaveLength(3)

    act(() => {
      fireEvent.click(addButton[1])
      fireEvent.click(addButton[2])
    })

    // 상품이 Store에 담겼는지 확인
    const sellState = useSellStore.getState()
    expect(sellState.list.size).toBe(2)
    expect(Array.from(sellState.list.values()).map(i => i.name)).toEqual(['테스트2', '테스트3'])

    // 모달 버튼 클릭
    const orderButton = screen.getByRole('button', { name: '상품 주문' })

    act(() => {
      fireEvent.click(orderButton)
    })

    // 모달이 열릴 때까지 기다림
    await waitFor(() => {
      expect(useModalStore.getState().isUserSell).toBe(true)
    })

    // 모달 DOM 찾기
    const modal = await screen.findByRole('dialog') // 없으면 data-testid 사용
    const modalScope = within(modal)

    // 모달 내 상품 확인
    expect(await modalScope.findByText('테스트2')).toBeInTheDocument()
    expect(await modalScope.findByText('테스트3')).toBeInTheDocument()
  })
})

describe('<SellListItem />', () => {
  beforeEach(() => {
    // 각 테스트마다 초기화
    useSellStore.setState({
      list: new Map([
        [
          1,
          {
            name: '테스트 상품',
            price: 10000,
            discountRate: 10,
            finalPrice: 9000,
            orderQuantity: 1,
          },
        ],
      ]),
    })
  })

  afterEach(() => {
    useSellStore.getState().clearList()
  })

  it('수량 증가 버튼 클릭 시 store에 반영된다', () => {
    render(
      <SellListItem
        product_id={1}
        name="테스트 상품"
        price={10000}
        discountRate={10}
        finalPrice={9000}
        orderQuantity={1}
      />,
    )

    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)

    const list = useSellStore.getState().list
    const updated = list.get(1)

    expect(updated?.orderQuantity).toBe(2)
  })

  it('수량 감소 버튼 클릭 시 store에 반영된다', () => {
    render(
      <SellListItem
        product_id={1}
        name="테스트 상품"
        price={10000}
        discountRate={10}
        finalPrice={9000}
        orderQuantity={3}
      />,
    )

    const minusButton = screen.getByText('-')
    fireEvent.click(minusButton)

    const list = useSellStore.getState().list
    const updated = list.get(1)

    expect(updated?.orderQuantity).toBe(2)
  })

  it('input 직접 입력 시 store에 반영된다', () => {
    render(
      <SellListItem
        product_id={1}
        name="테스트 상품"
        price={10000}
        discountRate={10}
        finalPrice={9000}
        orderQuantity={1}
      />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '5' } })

    const list = useSellStore.getState().list
    const updated = list.get(1)

    expect(updated?.orderQuantity).toBe(5)
  })

  it('삭제 아이콘 클릭 시 해당 상품이 store에서 제거된다', () => {
    render(
      <SellListItem
        product_id={1}
        name="테스트 상품"
        price={10000}
        discountRate={10}
        finalPrice={9000}
        orderQuantity={1}
      />,
    )

    const deleteIcon = screen.getByAltText('삭제')
    fireEvent.click(deleteIcon)

    const list = useSellStore.getState().list
    expect(list.has(1)).toBe(false)
  })
})
