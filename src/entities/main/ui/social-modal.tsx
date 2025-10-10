import { Button, Modal, Text } from '@/src/shared/ui'

type SocialModalProps = {
  isOpen: boolean
  text: string
  onIsOpen: () => void
}
export const SocialModal = ({ isOpen, onIsOpen, text }: SocialModalProps) => {
  return (
    <Modal isOpen={isOpen} className="rounded-[20px] bg-white p-[25px]">
      <div className="flex flex-col gap-[20px]">
        <Text className="text-dark text-[16px] font-bold">{text}</Text>
        <Button className="w-full gap-[10px] p-[15px]" variant="primary" onClick={onIsOpen}>
          확인
        </Button>
      </div>
    </Modal>
  )
}
