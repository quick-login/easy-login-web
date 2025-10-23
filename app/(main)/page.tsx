import { getSession } from '@/src/entities/user/model/user-auth'
import { MainPage } from '@/src/views'

export default async function Home() {
  const session = await getSession()
  console.log('사용자 세션', session)
  return <MainPage />
}
