import React from 'react'
import { motion } from "motion/react"

function Button1() {
  return (
    <div>
      <motion.button 
        // initial={{
        //   rotate : 0,
        // }}
        // animate={{
        //   rotate: [0 , 10 , 0],
          
        // }}
        // transition={{
        //   duration : 0.6,
        //   delay: 0.1,
        //   ease: 'easeInOut'
        // }}

        whileHover={{
          // rotate: [0 , 20 , 0]
          rotateX: 25,
          rotateY : 10,
          boxShadow : "0px 20px 50px rgba(8 , 112, 184,0.8)"      
        }}
        style={{
          translateZ : 100
        }}
        transition={{
          duration: 0.4
        }}

        className='group relative bg-black px-28 py-6 rounded-xl font-bold cursor-pointer shadow-[0px_1px_2px_0px_rgba(255 ,255 ,255 , 0.1)_inset ,0px_-1px_2px_0px_rgba(255 , 255 , 255 , 0.1)_inset]'>Framer Motion
        <span className='inline-block absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto'></span>
        <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[6px] w-3/4 mx-auto blur-sm'></span>
      </motion.button>
    </div>
  )
}

export default Button1
