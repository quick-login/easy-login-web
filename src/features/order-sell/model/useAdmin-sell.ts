import { adminAddSellAction, adminChangeStatusAction, adminDeleteSellAction } from './order-sell-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
import { useConfirmStore } from '@/src/shared/store/useConfirmStore'

export const useAdminSell = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)

  const handleAddSell = async (formData: FormData) => {
    const response = await adminAddSellAction(formData)
    if (response.success) {
      onOpenAlert('상품이 등록되었습니다.', () => {
        window.location.reload()
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  const handleDeleteSell = async (productId: number) => {
    const response = await adminDeleteSellAction(productId)
    if (response.success) {
      onOpenAlert('삭제되었습니다.', () => {
        window.location.reload()
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  const handleChangeStatus = async (productId: number) => {
    const response = await adminChangeStatusAction(productId)
    if (response.success) {
      onOpenAlert('상품 상태가 변경되었습니다.', () => {
        window.location.reload()
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('상품을 등록하시겠습니까?', () => handleAddSell(formdata))
  }

  return { handleSubmit, handleDeleteSell, handleChangeStatus }
}
