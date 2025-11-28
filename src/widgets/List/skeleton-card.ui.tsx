'use client'

import { motion } from 'framer-motion'

export const LoadingSkeletonCard = () => {
  return [...Array(8)].map((_, index) => (
    <motion.article
      key={index}
      className="bg-gray2 mb-[30px] flex flex-col gap-[10px] rounded-[10px] p-[10px] transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <motion.figure
        className="bg-gray3 flex items-center justify-center overflow-hidden rounded-[10px] p-[20px]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'loop',
          delay: index * 0.3,
        }}
      >
        <motion.div className="h-[200px] w-[200px]"></motion.div>
      </motion.figure>
      <motion.p
        className="bg-gray3 h-[25px] w-full rounded-[10px]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'loop',
          delay: index * 0.3,
        }}
      />
      <motion.p
        className="bg-gray3 h-[25px] w-full rounded-[10px]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'loop',
          delay: index * 0.3,
        }}
      />
    </motion.article>
  ))
}
