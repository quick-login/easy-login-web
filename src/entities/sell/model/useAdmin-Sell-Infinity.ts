import { useInfiniteQuery } from '@tanstack/react-query'
import { adminSellItemsAction } from './sell-action'
import { useItemStore } from '@/shared/store'

export const useAdminSellInfinite = () => {
  const setSellListInfinite = useItemStore(state => state.setSellListInfinite)

  return useInfiniteQuery({
    queryKey: ['admin-sell-list'],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await adminSellItemsAction(pageParam)
      setSellListInfinite(response.data)
      return response
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
    gcTime: 0,

    getNextPageParam: lastPage => {
      const { currentPage, totalPages } = lastPage.pagination!
      if (currentPage < totalPages) return currentPage + 1
      return undefined
    },
  })
}
