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
    //아래 로직 수정해야할듯 만약 1000페이지를 간다고하면 1000에 도달할때까지 증가해야함
    if (currentPage >= start + pageSize) {
      console.log('1')
      setStart(prev => prev + pageSize)
    }
    if (currentPage < start) {
      console.log('2')
      setStart(prev => prev - pageSize)
    }
  }, [currentPage, start])
  return (
    // <ul className="flex justify-center gap-[5px] md:gap-[10px]">
    //   <PageButton className={clsx(noPrev && 'hidden')}>
    //     <LinkText
    //       className="px-[5px] text-[11px] md:px-[10px] md:text-[16px]"
    //       href={`?page=${start - pageSize}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
    //     >
    //       ←
    //     </LinkText>
    //   </PageButton>
    //   {[...Array(pageSize)].map(
    //     (_, i) =>
    //       start + i <= totalPages && (
    //         <PageButton key={i} className={clsx(currentPage === start + i && 'bg-gray3')}>
    //           <LinkText
    //             className="px-[5px] text-[11px] md:px-[10px] md:text-[16px]"
    //             href={`?page=${start + i}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
    //           >
    //             {start + i}
    //           </LinkText>
    //         </PageButton>
    //       ),
    //   )}
    //   <PageButton className={clsx(noNext && 'hidden')}>
    //     <LinkText
    //       className="px-[5px] text-[11px] md:px-[10px] md:text-[16px]"
    //       href={`?page=${start + pageSize}${searchParams.get('STATUS') ? `&STATUS=${searchParams.get('STATUS')}` : ''}`}
    //     >
    //       →
    //     </LinkText>
    //   </PageButton>
    // </ul>
    <ul className="flex justify-center gap-[5px] md:gap-[10px]">
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
