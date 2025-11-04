'use client'

import { motion } from 'framer-motion'

export const LoadingSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col gap-[10px] overflow-hidden bg-white p-[20px]">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-gray2 flex items-center gap-[10px] rounded-[10px] px-[20px] py-[20px] transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <motion.div
            className="bg-gray3 h-[25px] w-[50px] rounded-[10px]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.3,
            }}
          />
          <motion.div
            className="bg-gray3 h-[25px] flex-1 rounded-[10px]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.3,
            }}
          />
          <motion.div
            className="bg-gray3 h-[25px] w-[100px] rounded-[10px]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.3,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
