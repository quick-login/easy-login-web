import { useRouter } from 'next/navigation'
import { type ChangeEvent, useState } from 'react'
import { cancleCashAction, requestCashAction } from './cash-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'

export const useReqCash = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const router = useRouter()
  const [cash, setCash] = useState<string>('')

  const handleChangeCash = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    let num = Number(value.replaceAll(',', ''))

    if (value === '0') return
    if (value === '') {
      setCash('')
      return
    }

    if (Number(value) < 1) num = 1

    setCash(num.toLocaleString())
  }

  const handleCashBtn = (value: number) => {
    const num = Number(cash.replaceAll(',', '')) + value
    setCash(num.toLocaleString())
  }

  const handleReqCash = async () => {
    const num = Number(cash.replaceAll(',', ''))
    const response = await requestCashAction(num)

    if (response.success) {
      onOpenAlert('신청되었습니다!', () => {
        router.push('/cash/list?page=1')
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  const handleCancleCash = async (cashChargeLogId: number) => {
    const response = await cancleCashAction(cashChargeLogId)
    if (response.success) {
      onOpenAlert('신청이 취소되었습니다.', () => {
        window.location.reload()
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  return { cash, handleCashBtn, handleChangeCash, handleReqCash, handleCancleCash }
}
