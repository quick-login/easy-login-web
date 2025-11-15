'use client'

import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Page } from '@/shared/api'
import { PageButton } from '@/shared/ui'

export const Pagination = ({ currentPage, pageSize = 10, totalElements, totalPages }: Page) => {
  const [start, setStart] = useState(1)
  const searchParams = useSearchParams()
  const noPrev = start === 1
  const noNext = start + pageSize - 1 >= totalPages
  console.log(
    'start',
    start,
    'currentPage',
    currentPage,
    'pageSize',
    pageSize,
    'totalElement',
    totalElements,
    'totalPage',
    totalPages,
  )

  useEffect(() => {
    if (currentPage >= start + pageSize) {
      const n = Math.floor(currentPage / pageSize)
      setStart(prev => prev + pageSize * n)
    }
    if (currentPage < start) {
      console.log('2')
      setStart(prev => prev - pageSize)
    }
  }, [currentPage, start])
  return (
    <ul className="flex flex-wrap justify-center gap-[5px] md:gap-[10px]">
      <PageButton
        className={clsx(noPrev && 'hidden')}
        href={`?page=${start - pageSize}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
      >
        ←
      </PageButton>
      {[...Array(pageSize)].map(
        (_, i) =>
          start + i <= totalPages && (
            <PageButton
              key={i}
              className={clsx(currentPage === start + i && 'bg-gray3')}
              href={`?page=${start + i}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
            >
              {start + i}
            </PageButton>
          ),
      )}
      <PageButton
        className={clsx(noNext && 'hidden')}
        href={`?page=${start + pageSize}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
      >
        →
      </PageButton>
    </ul>
  )
}
