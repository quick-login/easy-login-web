import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { noticePatchAction, noticeWriteAction } from './notice-action'
import { NoticeInfoAction } from '@/src/entities/notice/model/notice-action'
import type { NoticeItem } from '@/src/entities/notice/model/types'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
import { useConfirmStore } from '@/src/shared/store/useConfirmStore'

export const useWirteList = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const [data, setData] = useState<NoticeItem>({
    createdAt: '',
    fixed: false,
    name: '',
    noticeId: 0,
    title: '',
    content: '',
  })
  const [fixed, setFixed] = useState<boolean>(false)
  const router = useRouter()
  const noticeId = useSearchParams().get('id')
  const pathname = usePathname()
  const isEditMode = pathname.includes('modify')
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)

  useEffect(() => {
    if (isEditMode && noticeId) {
      handleGetNoticeItem()
    }
  }, [isEditMode, noticeId])

  const handleGetNoticeItem = async () => {
    const res = await NoticeInfoAction(Number(noticeId))
    if (res.success) {
      console.log('수정', res.data)
      setData(res.data)
      setFixed(res.data.fixed)
    } else {
      onOpenAlert(res.message)
    }
  }

  const handleWriteNotice = async (formData: FormData) => {
    const res = await noticeWriteAction(formData)
    if (res.success) {
      onOpenAlert('공지가 등록되었습니다!', () => {
        router.push('/notice?page=1')
      })
    } else {
      onOpenAlert(res.message)
    }
  }

  const handlePatchNotice = async (formData: FormData) => {
    const res = await noticePatchAction(Number(noticeId), formData)
    if (res.success) {
      onOpenAlert('공지가 수정되었습니다!', () => {
        router.push(`/notice/${noticeId}`)
      })
    } else {
      onOpenAlert(res.message)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    if (isEditMode && noticeId) {
      onOpenConfirm('수정하시겠습니까?', () => handlePatchNotice(formdata))
    } else {
      onOpenConfirm('등록하시겠습니까?', () => handleWriteNotice(formdata))
    }
  }

  return { data, fixed, setFixed, isEditMode, handleSubmit }
}
