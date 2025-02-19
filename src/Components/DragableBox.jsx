import React from 'react'
import { motion } from 'motion/react'
function DragableBox() {
  return (
    <div className='py-20 flex justify-center'>
        <motion.div 
            drag
            whileDrag={{
                scale: 1.2
            }}
            dragConstraints={{
                left: -500,
                right: 500,
                top: -500,
                bottom: 500,
                
            }}
            dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 2
            }}
            dragSnapToOrigin={true}
            
        
        className='w-44 h-44 rounded-md bg-white '>
            <p className='text-2xl font-bold text-center text-black'>Drag</p>
        </motion.div>
    </div>
  )
}

export default DragableBox
