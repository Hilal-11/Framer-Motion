import React from 'react'
import { motion } from 'motion/react'
function Keyframes() {
  return (
    <div className='flex justify-center py-10'>
        <motion.div 
            initial={{
                
            }}
            animate={{
                x: [0 , 100 , 0],
                rotate: [null , 100 , 360 , 200 , 0],
                borderRadius: [0 , 20 , 50 , 100 , 0],
                scale : [1 , 0.4 , 1.6 , 0.5 , 0.2 ,1],
                backgroundColor: ["#ffffff" , "#ff00ff" , "#000000" , "#ffff00 " , "#ffffff"]
                
            }}
            transition={{
                ease: 'easeInOut',
                delay: 2,
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
            
            }}
         className='w-[200px] h-[200px] bg-white rounded-md'>

        </motion.div>
    </div>
  )
}

export default Keyframes
