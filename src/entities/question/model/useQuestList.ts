import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { questListAction } from './question-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib'
import type { Question } from './types'

export const useQuestList = () => {
  const questPage = Number(useSearchParams().get('page'))
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
    const response = await questListAction(questPage)

    handleResponse(response, () => {
      setQuestList(response.data)
      setPagination(response.pagination!)
    })

    setIsLoading(false)
  }

  useEffect(() => {
    handleGetQuestList()
    window.scrollTo(0, 0)
  }, [questPage])

  return { questList, pagination, isLoading }
}
