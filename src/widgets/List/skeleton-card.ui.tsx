'use client'

import { motion } from 'framer-motion'

export const LoadingSkeletonCard = () => {
  return (
    <div className="flex-1 flex-col bg-white p-[20px]">
      <div className="h-full flex-1 gap-[10px]">
        <ul className="grid h-full grid-cols-2 items-start gap-[20px] md:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <motion.li
              key={index}
              className="bg-gray2 flex h-full flex-col gap-[10px] rounded-[10] p-[20px] transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-gray3 w-full flex-1 rounded-[10px]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.3,
                }}
              />
              <motion.div
                className="bg-gray3 h-[25px] w-full rounded-[10px]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.3,
                }}
              />
              <motion.div
                className="bg-gray3 h-[25px] w-full rounded-[10px]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.3,
                }}
              />
              <motion.div
                className="bg-gray3 h-[25px] w-full rounded-[10px]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.3,
                }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
