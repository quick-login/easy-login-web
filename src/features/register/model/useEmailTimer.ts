import { useEffect, useState } from 'react'

export const useEmailTimer = () => {
  const [time, setTime] = useState<number>(180)

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(prev => prev - 1)
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [time])

  const handleformatTime = (second: number): string => {
    if (second === 0) return '만료'
    const minutes = Math.floor(second / 60)
    const seconds = second % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return { time, handleformatTime }
}
