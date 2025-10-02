import type { LoginType } from '../type'

export const postLogin = async (loginData: LoginType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/login`, {
    method: 'POST',
    body: JSON.stringify({ loginData }),
  }).then(response => response.json())

  return res
}
