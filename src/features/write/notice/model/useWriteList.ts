import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { noticePatchAction, noticeWriteAction } from './notice-action'
import { noticeInfoAction } from '@/entities/notice/model/notice-action'
import type { NoticeItem } from '@/entities/notice/model/types'
import { useFeatureResponse, useResponse } from '@/shared/lib'
import { useConfirmStore } from '@/shared/store'

export const useWirteList = () => {
  const [data, setData] = useState<NoticeItem>({
    createdAt: '',
    fixed: false,
    name: '',
    noticeId: 0,
    title: '',
    content: '',
  })
  const router = useRouter()
  const noticeId = useSearchParams().get('id')
  const pathname = usePathname()
  const isEditMode = pathname.includes('modify')
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const handleResponse = useFeatureResponse()
  const handleEntitiesResponse = useResponse()

  useEffect(() => {
    if (isEditMode && noticeId) {
      handleGetNoticeItem()
    }
  }, [isEditMode, noticeId])

  const handleGetNoticeItem = async () => {
    const response = await noticeInfoAction(Number(noticeId))
    handleEntitiesResponse(response, () => setData(response.data))
  }

  const handleWriteNotice = async (formData: FormData) => {
    const response = await noticeWriteAction(formData)
    handleResponse(response, '공지가 등록되었습니다!', () => router.push('/notice?page=1'))
  }

  const handlePatchNotice = async (formData: FormData) => {
    const response = await noticePatchAction(Number(noticeId), formData)
    handleResponse(response, '공지가 수정되었습니다!', () => router.push(`/notice/${noticeId}`))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    if (isEditMode && noticeId) {
      onOpenConfirm('수정하시겠습니까?', () => handlePatchNotice(formdata))
    } else {
      onOpenConfirm('등록하시겠습니까?', () => handleWriteNotice(formdata))
    }
  }

  return { data, setData, isEditMode, handleSubmit }
}
