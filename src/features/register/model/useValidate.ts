// import { useEffect, useState } from 'react'
// import type { RegistType } from '../type'

// export const useRegistValidate = (registData: RegistType) => {
//   const [pwValidate, setPwValidate] = useState<boolean>(true)
//   const [pwSame, setPwSame] = useState<boolean>(true)

//   const RegExp =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=\+\[\]{};:'",.<>\/?\\|`~])[A-Za-z\d!@#$%^&*()\-_=\+\[\]{};:'",.<>\/?\\|`~]{6,30}$/
//   useEffect(() => {
//     setPwValidate(!RegExp.test(registData.password))
//     if (!registData.passwordCheck) {
//       setPwSame(true)
//     } else {
//       setPwSame(registData.password === registData.passwordCheck)
//     }
//     console.log(registData)
//     console.log(registData.password === registData.passwordCheck)
//   }, [registData.password, registData.passwordCheck])

//   return { pwValidate, pwSame }
// }
