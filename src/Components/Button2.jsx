import React from 'react'
import { motion } from 'motion/react'
function Button2() {
  return (
    <div>
        <motion.button
            whileHover={{
                rotateX: 0,
                rotateY: -30,
                boxShadow: '0px 2px 10px #ff00ff'
            }}
            style={{
                translateZ : 100
            }}
            transition={{
                duration: 0.3
            }}


            className='group relative text-black bg-white px-28 py-6 rounded-xl font-bold cursor-pointer shadow-[0px_1px_2px_0px_rgba(255 ,255 ,255 , 0.1)_inset ,0px_-1px_2px_0px_rgba(255 , 255 , 255 , 0.1)_inset]'
        >
            Framer Motion
            <span className='inline-block absolute inset-x-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0 h-[2px] w-full mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent'></span>
            <span className='inline-block absolute inset-x-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-0 h-[2px] w-full mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent'></span>


        </motion.button>
    </div>
  )
}

export default Button2
