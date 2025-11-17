'use client'
import { useState } from 'react'

export const UserButton = () => {
  const [user, setUser] = useState<{ firstName: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.example.com/user')
      const data = await res.json()
      setUser(data)
    } catch (err) {
      setUser({ firstName: '에러발생' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={fetchUser} disabled={loading}>
        {loading ? 'Loading...' : 'Load User'}
      </button>
      {user && <div data-testid="user-info">{user.firstName}</div>}
    </div>
  )
}
