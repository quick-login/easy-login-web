// 'use client'

// import { useRouter } from 'next/navigation'
// import { Pagination } from './pagination.ui'
// import { LoadingSkeleton } from './skeleton-list.ui'
// import { NoticeFixedItem, NoticeItem, useNoticeList } from '@/entities/notice'
// import { Text } from '@/shared/ui'

// export const NoticeList = () => {
//   const { pagination, basic, fixed, isLoading } = useNoticeList()
//   const router = useRouter()

//   if (isLoading) return <LoadingSkeleton />

//   return basic.length === 0 ? (
//     <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
//       <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">공지사항이 존재하지 않습니다.</Text>
//     </div>
//   ) : (
//     <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
//       <table>
//         <tbody className="flex flex-col gap-[10px]">
//           {fixed.map(d => (
//             <NoticeFixedItem
//               key={d.noticeId}
//               createdAt={d.createdAt}
//               fixed={d.fixed}
//               name={d.name}
//               noticeId={d.noticeId}
//               title={d.title}
//               onMove={() => router.push(`/notice/${d.noticeId}`)}
//             />
//           ))}
//         </tbody>
//       </table>
//       <table className="flex-1">
//         <tbody className="flex flex-1 flex-col gap-[10px]">
//           {basic.map(d => (
//             <NoticeItem
//               key={d.noticeId}
//               createdAt={d.createdAt}
//               fixed={d.fixed}
//               name={d.name}
//               noticeId={d.noticeId}
//               title={d.title}
//               onMove={() => router.push(`/notice/${d.noticeId}`)}
//             />
//           ))}
//         </tbody>
//       </table>
//       <Pagination
//         currentPage={pagination.currentPage}
//         totalElements={pagination.totalElements}
//         pageSize={pagination.pageSize}
//         totalPages={pagination.totalPages}
//       />
//     </div>
//   )
// }
// import { useRouter } from 'next/navigation'
import { Pagination } from './pagination.ui'
import { NoticeFixedItem, NoticeItem, onNoticeList } from '@/entities/notice'
import { Text } from '@/shared/ui'

export const NoticeList = async ({ page }: { page: string }) => {
  const { basic, fixed } = await onNoticeList(page)

  return basic.data.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">공지사항이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <table>
        <tbody className="flex flex-col gap-[10px]">
          {fixed.data.map(d => (
            <NoticeFixedItem
              key={d.noticeId}
              createdAt={d.createdAt}
              fixed={d.fixed}
              name={d.name}
              noticeId={d.noticeId}
              title={d.title}
            />
          ))}
        </tbody>
      </table>
      <table className="flex-1">
        <tbody className="flex flex-1 flex-col gap-[10px]">
          {basic.data.map(d => (
            <NoticeItem
              key={d.noticeId}
              createdAt={d.createdAt}
              fixed={d.fixed}
              name={d.name}
              noticeId={d.noticeId}
              title={d.title}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={basic.pagination!.currentPage}
        totalElements={basic.pagination!.totalElements}
        pageSize={basic.pagination!.pageSize}
        totalPages={basic.pagination!.totalPages}
      />
    </div>
  )
}
