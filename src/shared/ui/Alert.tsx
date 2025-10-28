'use client'

import clsx from 'clsx'
import { useEffect } from 'react'
import { Button } from './Button'
import { Text } from './Text'
import { useAlertStore } from '../store/useAlertStore'

export const Alert = () => {
  const msg = useAlertStore(state => state.msg)
  const onCloseAlert = useAlertStore(state => state.onCloseAlert)

  useEffect(() => {
    return () => {
      onCloseAlert()
    }
  }, [])

  return (
    <section
      className={clsx('fixed inset-0 z-[2000] flex h-[100vh] w-full items-center justify-center bg-black/50')}
      onClick={onCloseAlert}
    >
      <div className="flex min-w-[250px] flex-col items-center justify-center rounded-[20px] bg-white">
        <div className="flex w-full flex-1 items-center justify-center p-[50px]">
          <Text className="font-semibold text-black">{msg}</Text>
        </div>
        <Button className="w-full rounded-none rounded-b-[20px]">확인</Button>
      </div>
    </section>
  )
}
