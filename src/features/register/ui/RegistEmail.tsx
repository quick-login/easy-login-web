import clsx from 'clsx'
import { RegistEmailCode } from './email-code'
import { useEmail } from '../model/useEmail'
import { Button, Input, Modal, Text } from '@/src/shared/ui'
import type { RegistEmailProps } from '../type'

export const RegistEmail = ({ email, onChange }: RegistEmailProps) => {
  const { code, handleChangeCode, handleEmailCode, handleEmailCheck, Invalid, isOpen, handleModalClose } = useEmail(
    email!,
  )
  return (
    <>
      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center gap-[10px]">
          <Input
            className="min-w-0 flex-1"
            type="text"
            name="email"
            value={email!}
            place="이메일 입력"
            onChange={onChange}
            read={Invalid.message === '이메일 인증 완료'}
          />
          <Button
            className="gap-[10px] p-[15px]"
            onClick={handleEmailCheck}
            variant={Invalid.isFlag || email!.length === 0 ? 'noActive' : 'primary'}
          >
            인증하기
          </Button>
        </div>
        {Invalid.message !== '인증코드가 맞지 않아요' && (
          <Text
            className={clsx(
              'text-[16px] leading-[150%] font-normal',
              Invalid.isFlag ? 'text-positive' : 'text-negative',
            )}
          >
            {Invalid.message}
          </Text>
        )}
      </div>
      {/* <Modal isOpen={isOpen} className="rounded-[20px] bg-white p-[25px]">
        <RegistEmailCode
          code={code}
          onChange={handleChangeCode}
          onEmailCode={handleEmailCode}
          check={Invalid}
          onModalOpen={handleModalClose}
        />
      </Modal> */}
    </>
  )
}
