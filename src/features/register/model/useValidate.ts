import { useEffect, useState } from 'react'
import type { RegistType } from '../type'

export const useRegistValidate = (registData: RegistType) => {
  const [pwValidate, setPwValidate] = useState<boolean>(true)
  const [pwSame, setPwSame] = useState<boolean>(true)

  const RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*~])[a-zA-Z0-9!@#$%^&*~]{6,30}$/

  useEffect(() => {
    setPwValidate(!RegExp.test(registData.password))
    if (!registData.passwordCheck) {
      setPwSame(false)
    } else {
      setPwSame(registData.password === registData.passwordCheck)
    }
  }, [registData.password, registData.passwordCheck])

  return { pwValidate, pwSame }
}
