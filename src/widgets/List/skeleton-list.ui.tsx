'use client'

import { motion } from 'framer-motion'

export const LoadingSkeleton = () => {
  return (
    <ul className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      {[...Array(10)].map((_, index) => (
        <motion.li
          key={index}
          className="bg-gray2 flex flex-wrap items-center justify-between gap-[10px] rounded-[10px] px-[15px] py-[10px] transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <motion.p
            className="bg-gray3 order-1 h-[25px] w-[50px] shrink-0 rounded-[10px]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.3,
            }}
          />
          <motion.p
            className="bg-gray3 order-3 h-[25px] w-full rounded-[10px] md:order-2 md:w-auto md:flex-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.3,
            }}
          />
          <motion.p
            className="bg-gray3 order-2 h-[25px] w-[100px] shrink-0 rounded-[10px] md:order-3"
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
  )
}
