import { getCookies } from '@/src/shared/lib/cookie'
import { LoginPage, MainPage } from '@/src/views'

export default async function Home() {
  const token = await getCookies('token')
  return token ? <MainPage /> : <LoginPage />
}
