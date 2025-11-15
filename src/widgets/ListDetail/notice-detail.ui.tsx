'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { NoticeInfo, useNotice } from '@/entities/notice'
import { DeleteNoticeInfoBtn } from '@/features/deleteDetail'
import { Button, Footer } from '@/shared/ui'

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
        <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-between gap-[10px] px-[5px]">
          <div className="400:order-none order-2 flex gap-[20px]">
            {session?.user?.role === 'ADMIN' && <DeleteNoticeInfoBtn noticeId={noticeId} />}
          </div>
          <div className="400:order-none 400:px-0 400:w-fit order-1 flex w-full gap-[10px] px-[5px]">
            <Button className="400:w-fit w-full p-[15px]" variant="cancle" onClick={() => router.back()}>
              이전으로
            </Button>
            {session?.user?.role === 'ADMIN' && (
              <Button
                className="400:w-fit w-full p-[15px]"
                onClick={() => router.push(`/notice/modify?id=${noticeId}`)}
              >
                수정하기
              </Button>
            )}
          </div>
        </div>
      </Footer>
    </>
  )
}
