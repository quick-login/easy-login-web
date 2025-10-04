import { Button, Modal, Text } from '@/src/shared/ui'

type SocialModalProps = {
  isOpen: boolean
  onIsOpen: () => void
}
export const SocialModal = ({ isOpen, onIsOpen }: SocialModalProps) => {
  return (
    <Modal isOpen={isOpen} className="rounded-[20px] bg-white p-[25px]">
      <div className="flex flex-col gap-[20px]">
        <Text className="text-dark text-[16px] font-bold">로그인 후 이용 가능해요!</Text>
        <Button className="w-full gap-[10px] p-[15px]" variant="primary" onClick={onIsOpen}>
          확인
        </Button>
      </div>
    </Modal>
  )
}
