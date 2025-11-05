import { useState } from 'react'

export const useBoolean = (initialValue: boolean): [boolean, () => void, () => void] => {
  const [state, setState] = useState<boolean>(initialValue)

  const setTrue = () => {
    setState(true)
  }
  const setFalse = () => {
    setState(false)
  }

  return [state, setTrue, setFalse]
}
