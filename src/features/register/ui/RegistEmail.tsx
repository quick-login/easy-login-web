import clsx from 'clsx'
import { Button, Input, Text } from '@/src/shared/ui'
import type { RegistEmailProps } from '../type'

export const RegistEmail = ({ email, onChange, onEmailCheck, check }: RegistEmailProps) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center gap-[10px]">
        <Input
          className="min-w-0 flex-1"
          type="text"
          name="email"
          value={email!}
          place="이메일 입력"
          onChange={onChange}
        />
        <Button
          className="gap-[10px] p-[15px]"
          onClick={onEmailCheck}
          variant={check.isEmail || email!.length === 0 ? 'noActive' : 'primary'}
        >
          중복확인
        </Button>
      </div>
      <Text
        className={clsx('text-[16px] leading-[150%] font-normal', check.isEmail ? 'text-positive' : 'text-negative')}
      >
        {check.message}
      </Text>
    </div>
  )
}
