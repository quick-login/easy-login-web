'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { NoticeInfo } from '@/src/entities/notice'
import { useNotice } from '@/src/entities/notice/model/useNotice'
import { DeleteNoticeInfoBtn } from '@/src/features/deleteDetail'
import { Button } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const NoticeDetail = ({ noticeId }: { noticeId: number }) => {
  const { notice } = useNotice(noticeId)
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <>
      <NoticeInfo
        fixed={notice.fixed}
        content={notice.content}
        createdAt={notice.createdAt}
        name={notice.name}
        noticeId={notice.noticeId}
        title={notice.title}
      />

      <hr className="border-gray2" />
      <Footer>
        <div className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[16px]">
          {session?.user?.role === 'ADMIN' && <DeleteNoticeInfoBtn noticeId={noticeId} />}
        </div>
        <div className="flex gap-[10px]">
          <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
          {session?.user?.role === 'ADMIN' && (
            <Button className="p-[15px]" onClick={() => router.push(`/notice/modify?id=${noticeId}`)}>
              수정하기
            </Button>
          )}
        </div>
      </Footer>
    </>
  )
}
