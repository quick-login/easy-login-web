'use client'

import clsx from 'clsx'
import { useEffect } from 'react'
import { Button } from './Button'
import { Text } from './Text'
import { useConfirmStore } from '../store/useConfirmStore'

export const Confirm = () => {
  const msg = useConfirmStore(state => state.msg)
  const onTrue = useConfirmStore(state => state.onTrue)
  const onFalse = useConfirmStore(state => state.onFalse)

  useEffect(() => {
    return () => {
      console.log('eee')
      onFalse()
    }
  }, [])

  return (
    <section className={clsx('fixed inset-0 z-50 flex h-[100vh] w-full items-center justify-center bg-black/50')}>
      <div className="flex min-w-[250px] flex-col items-center justify-center gap-[30px] rounded-[20px] bg-white px-[20px] py-[50px]">
        <Text className="font-semibold text-black">{msg}</Text>
        <div className="flex w-full gap-[10px]">
          <Button className="w-full" onClick={onTrue}>
            확인
          </Button>
          <Button className="w-full" onClick={onFalse}>
            닫기
          </Button>
        </div>
      </div>
    </section>
  )
}
