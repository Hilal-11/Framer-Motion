import React from 'react'
import { motion } from 'motion/react'
function LoadingBar() {
  return (
    <div className='flex w-full justify-center'>
      <div className='w-[80%] h-3 rounded-full bg-white overflow-hidden'>
        <motion.div
            initial={{
                width: 0,
            }}
            animate={{
                width: 1500,
            }}
            transition={{
                duration: 5,
                delay: 2
            }}
        className='h-full bg-lime-500 rounded-full'>
        </motion.div>
      </div>

      
    </div>
  )
}

export default LoadingBar
