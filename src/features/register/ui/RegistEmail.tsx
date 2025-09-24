import { Button, Input, Text } from '@/src/shared/ui'
import type { RegistEmailProps } from '../type'

export const RegistEmail = ({ email, onChange }: RegistEmailProps) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center gap-[10px]">
        <Input className="w-[90%]" type="text" name="email" value={email!} place="이메일 입력" onChange={onChange} />
        <Button className="w-[10%]" onClick={() => {}}>
          중복확인
        </Button>
      </div>
      <Text className="text-negative text-[16px]">중복 확인이 필요해요</Text>
      {/* <Text className="text-positive text-[16px]">사용할 수 있는 이메일이에요!</Text> */}
    </div>
  )
}
