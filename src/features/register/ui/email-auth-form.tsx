import clsx from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'
import { useEmailTimer } from '../model/useEmailTimer'
import { useModalStore } from '@/shared/store'
import { Button, Input, Text } from '@/shared/ui'
import type { EmailCodeProps } from '../type'

export const EmailAuthForm = ({ codeFormRef, email, stateCode, onValidate, onModal }: EmailCodeProps) => {
  const setModal = useModalStore(state => state.setModal)
  const { time, handleformatTime } = useEmailTimer()

  useEffect(() => {
    return () => {
      setModal('isEmail', false)
    }
  }, [])

  return (
    <section className={'fixed inset-0 z-[1100] flex h-[100vh] w-full items-center justify-center bg-black/50'}>
      <div className="m-[10px] flex flex-col gap-[6px] rounded-[20px] bg-white p-[30px]">
        <div className="flex items-center justify-between">
          <Text className={clsx('text-[20px] leading-[150%] font-bold')}>이메일 인증</Text>
          <Image
            src="./close.svg"
            alt="close"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => {
              onModal()
              setModal('isEmail', false)
            }}
          />
        </div>

        <Text className={clsx('text-[12px] leading-[150%] font-normal')}>해당 메일로 인증코드를 발송했습니다</Text>

        <form ref={codeFormRef} action={onValidate} className="flex items-center gap-[10px]">
          <Input type="hidden" name="email" placeholder="" value={email} />
          <div className="border-b-gray3 flex items-center justify-between gap-[5px] border-b">
            <Input className="w-full border-none px-0" type="text" name="code" placeholder="인증번호 입력" />
            <Text className={clsx('min-w-[40px] text-center text-[12px]')}>{handleformatTime(time)}</Text>
          </div>
          <Button type="submit" className="min-w-[60px] gap-[10px] p-[15px]">
            확인
          </Button>
        </form>
        {stateCode.message !== '이메일 인증 성공' && (
          <Text className={clsx('text-negative text-[12px] leading-[150%] font-normal')}>{stateCode.message}</Text>
        )}
      </div>
    </section>
  )
}
