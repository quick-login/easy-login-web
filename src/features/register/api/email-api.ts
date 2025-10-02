export const postEmailCheck = async (email: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/duplicate`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  }).then(response => response.json())

  return res
}
