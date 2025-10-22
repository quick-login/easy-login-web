'use client'

import { useRouter } from 'next/navigation'
import { NoticeInfo } from '@/src/entities/notice'
import { useNotice } from '@/src/entities/notice/model/useNotice'
import { DeleteNoticeInfoBtn } from '@/src/features/deleteDetail'
import { Button } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const NoticeDetail = ({ noticeId }: { noticeId: number }) => {
  const { notice } = useNotice(noticeId)
  const router = useRouter()

  return (
    <>
      <NoticeInfo
        content={notice.content}
        createdAt={notice.createdAt}
        name={notice.name}
        noticeId={notice.noticeId}
        title={notice.title}
      />

      <hr className="border-gray2" />
      <Footer>
        <div className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[16px]">
          <DeleteNoticeInfoBtn noticeId={noticeId} />
        </div>
        <div className="flex gap-[10px]">
          <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
          <Button className="p-[15px]">수정하기</Button>
        </div>
      </Footer>
    </>
  )
}
