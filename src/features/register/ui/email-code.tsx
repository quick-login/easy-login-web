import clsx from 'clsx'
import { Button, Input, Text } from '@/src/shared/ui'
import type { EmailCodeProps } from '../type'

export const RegistEmailCode = ({ code, onChange, onEmailCode, check }: EmailCodeProps) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center gap-[10px]">
        <Input
          className="min-w-0 flex-1"
          type="text"
          name="code"
          value={code!}
          place="인증번호 입력"
          onChange={onChange}
        />
        <Button
          className="gap-[10px] p-[15px]"
          onClick={onEmailCode}
          variant={code!.length !== 6 ? 'noActive' : 'primary'}
        >
          확인
        </Button>
      </div>
      <Text
        className={clsx('text-[16px] leading-[150%] font-normal', check.isFlag ? 'text-positive' : 'text-negative')}
      >
        {check.message}
      </Text>
    </div>
  )
}
