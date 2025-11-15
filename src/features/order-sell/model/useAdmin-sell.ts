import { adminAddSellAction, adminChangeStatusAction, adminDeleteSellAction } from './order-sell-action'
import { useFeatureResponse } from '@/shared/lib'
import { useConfirmStore, useModalStore } from '@/shared/store'

export const useAdminSell = () => {
  const handleResponse = useFeatureResponse()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const setModal = useModalStore(state => state.setModal)

  const handleAddSell = async (formData: FormData) => {
    const response = await adminAddSellAction(formData)
    handleResponse(response, '상품이 등록되었습니다.', () => {
      setModal('isAdminSell', false)
      window.location.reload()
    })
  }

  const handleDeleteSell = async (productId: number) => {
    const response = await adminDeleteSellAction(productId)
    handleResponse(response, '상품이 삭제되었습니다.', () => window.location.reload())
  }

  const handleChangeStatus = async (productId: number) => {
    const response = await adminChangeStatusAction(productId)
    handleResponse(response, '상품 상태가 변경되었습니다.', () => window.location.reload())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('상품을 등록하시겠습니까?', () => handleAddSell(formdata))
  }

  return { handleSubmit, handleDeleteSell, handleChangeStatus }
}
