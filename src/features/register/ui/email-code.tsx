// import clsx from 'clsx'
// import Image from 'next/image'
// import { Button, Input, Text } from '@/src/shared/ui'
// import type { EmailCodeProps } from '../type'

// export const RegistEmailCode = ({ code, onChange, onEmailCode, check, onModalOpen }: EmailCodeProps) => {
//   return (
//     <div className="flex flex-col gap-[6px]">
//       <div className="flex items-center justify-between">
//         <Text className={clsx('text-[20px] leading-[150%] font-bold')}>이메일 인증</Text>
//         <Image src="./close.svg" alt="close" width={20} height={20} className="cursor-pointer" onClick={onModalOpen} />
//       </div>
//       <Text className={clsx('text-[12px] leading-[150%] font-normal')}>해당 메일로 인증코드를 발송했습니다</Text>
//       <div className="flex items-center gap-[10px]">
//         <Input
//           className="min-w-0 flex-1"
//           type="text"
//           name="code"
//           value={code!}
//           place="인증번호 입력"
//           onChange={onChange}
//         />
//         <Button
//           className="gap-[10px] p-[15px]"
//           onClick={onEmailCode}
//           variant={code!.length !== 6 ? 'noActive' : 'primary'}
//         >
//           확인
//         </Button>
//       </div>
//       <Text
//         className={clsx('text-[12px] leading-[150%] font-normal', check.isFlag ? 'text-positive' : 'text-negative')}
//       >
//         {check.message}
//       </Text>
//     </div>
//   )
// }
import clsx from 'clsx'
import Image from 'next/image'
import { Button, Input, Text } from '@/src/shared/ui'
import type { EmailCodeProps } from '../type'

export const RegistEmailCode = ({ email, stateCode, onValidate, onModal }: EmailCodeProps) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center justify-between">
        <Text className={clsx('text-[20px] leading-[150%] font-bold')}>이메일 인증</Text>
        <Image src="./close.svg" alt="close" width={20} height={20} className="cursor-pointer" onClick={onModal} />
      </div>
      <Text className={clsx('text-[12px] leading-[150%] font-normal')}>해당 메일로 인증코드를 발송했습니다</Text>
      <form action={onValidate} className="flex items-center gap-[10px]">
        <Input className="min-w-0 flex-1" type="hidden" name="email" place="" value={email} />
        <Input className="min-w-0 flex-1" type="text" name="code" place="인증번호 입력" />
        <Button type="submit" className="gap-[10px] p-[15px]">
          확인
        </Button>
      </form>
      {stateCode.message !== '이메일 인증 성공' && (
        <Text className={clsx('text-negative text-[12px] leading-[150%] font-normal')}>{stateCode.message}</Text>
      )}
    </div>
  )
}
