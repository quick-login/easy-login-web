import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminQuestListAction } from './question-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib'
import type { Question } from './types'

export const useAdminQuestList = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const questPage = Number(searchParams.get('page'))
  const questType = searchParams.get('STATUS') ?? 'WAITING'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [questList, setQuestList] = useState<Question[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: questPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleResponse = useResponse()

  const handleGetQuestList = async () => {
    setIsLoading(true)
    const response = await adminQuestListAction(questPage, 10, questType)

    handleResponse(response, () => {
      setQuestList(response.data)
      setPagination(response.pagination!)
    })
    setIsLoading(false)
  }

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    const params = new URLSearchParams(searchParams.toString())
    params.set('page', '1')
    params.set('STATUS', value)

    router.replace(`?${params.toString()}`)
  }

  useEffect(() => {
    handleGetQuestList()
    window.scrollTo(0, 0)
  }, [questPage, questType])

  return { questList, pagination, handleChangeStatus, isLoading }
}
