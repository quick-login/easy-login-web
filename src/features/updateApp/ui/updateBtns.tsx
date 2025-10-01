'use client'

import Image from 'next/image'
import { Button, Text } from '@/src/shared/ui'

export const UpdateBtns = () => {
  return (
    <div className="flex justify-between px-[20px] pt-[10px] pb-[20px]">
      <div className="flex cursor-pointer items-center justify-center gap-[4px]">
        <Image src="/trash.svg" alt="delete" width={24} height={24} />
        <Text className="text-negative leading-[150%] font-normal">삭제</Text>
      </div>
      <div className="flex gap-[10px]">
        <Button className="gap-[10px] px-[15px] py-[10px]" variant="cancle" onClick={() => {}}>
          취소
        </Button>
        <Button className="gap-[10px] px-[15px] py-[10px]" onClick={() => {}}>
          변경사항 저장
        </Button>
      </div>
    </div>
  )
}
