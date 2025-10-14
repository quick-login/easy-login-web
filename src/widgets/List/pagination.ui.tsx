import type { Page } from '@/src/shared/api/axios-client'
import { PageButton } from '@/src/shared/ui'
import type { Dispatch } from 'react'

interface PaginationProps extends Page {
  setPage: Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({ currentPage, pageSize = 10, totalElements, totalPages, setPage }: PaginationProps) => {
  const pageNum = Math.ceil(totalElements / pageSize)
  console.log('최대 페이지', pageNum)
  return (
    <section className="flex items-center justify-center">
      <div className="flex justify-center gap-[10px]">
        <PageButton
          onClick={() => {
            setPage(currentPage - 1)
          }}
          isDisable={currentPage === 1}
        >
          ←
        </PageButton>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <PageButton
              key={i + 1}
              onClick={() => {
                setPage(i + 1)
              }}
              isDisable={false}
            >
              {i + 1}
            </PageButton>
          ))}
        <PageButton
          onClick={() => {
            setPage(currentPage + 1)
          }}
          isDisable={currentPage === pageNum}
        >
          →
        </PageButton>
      </div>
    </section>
  )
}
