import React from 'react'
import { motion } from 'motion/react'
function Gusters() {
  return (
    <div>
       <div className='py-20 flex gap-20 justify-center'>
            <motion.button
                initial={{
                    x: 1,
                    opacity: 1
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9

                }}
                transition={{
                    duration: 0.3
                }}
            className='relative bg-white text-black px-28 py-6 rounded-full font-bold cursor-pointer shadow-[0px_1px_2px_0px_rgba(255 ,255 ,255 , 0.1)_inset ,0px_-1px_2px_0px_rgba(255 , 255 , 255 , 0.1)_inset]'>Framer Motion</motion.button>


            <motion.button className='relative bg-white text-black px-28 py-6 rounded-xl font-bold cursor-pointer shadow-[0px_1px_2px_0px_rgba(255 ,255 ,255 , 0.1)_inset ,0px_-1px_2px_0px_rgba(255 , 255 , 255 , 0.1)_inset]'>Framer Motion</motion.button>

            <motion.button className='relative bg-white text-black px-28 py-6 rounded-xl font-bold cursor-pointer shadow-[0px_1px_2px_0px_rgba(255 ,255 ,255 , 0.1)_inset ,0px_-1px_2px_0px_rgba(255 , 255 , 255 , 0.1)_inset]'>Framer Motion</motion.button>
       </div>
    </div>
  )
}

export default Gusters
