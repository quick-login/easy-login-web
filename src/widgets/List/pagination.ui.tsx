'use client'

import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Page } from '@/src/shared/api'
import { LinkText, PageButton } from '@/src/shared/ui'

export const Pagination = ({ currentPage, pageSize = 10, totalElements, totalPages }: Page) => {
  const [start, setStart] = useState(1)
  const searchParams = useSearchParams()
  const noPrev = start === 1
  const noNext = start + pageSize - 1 >= totalPages

  useEffect(() => {
    if (currentPage === start + pageSize) setStart(prev => prev + pageSize)
    if (currentPage < start) setStart(prev => prev - pageSize)
  }, [currentPage, start])

  return (
    <section className="flex items-center justify-center">
      <ul className="flex justify-center gap-[10px]">
        <PageButton className={clsx(noPrev && 'hidden')}>
          <LinkText
            className="px-[10px] py-[5px]"
            href={`?page=${start - 1}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
          >
            ←
          </LinkText>
        </PageButton>
        {[...Array(pageSize)].map((_, i) => (
          <>
            {start + i <= totalPages && (
              <PageButton key={i} className={clsx(currentPage === start + i && 'bg-gray3')}>
                <LinkText
                  className="px-[10px] py-[5px]"
                  href={`?page=${start + i}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
                >
                  {start + i}
                </LinkText>
              </PageButton>
            )}
          </>
        ))}
        <PageButton className={clsx(noNext && 'hidden')}>
          <LinkText
            className="px-[10px] py-[5px]"
            href={`?page=${start + pageSize}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
          >
            →
          </LinkText>
        </PageButton>
      </ul>
    </section>
  )
}
