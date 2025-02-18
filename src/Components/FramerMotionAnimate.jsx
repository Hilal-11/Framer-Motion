import React from 'react'
import { motion } from 'motion/react'
function FramerMotionAnimate() {
  return (
    <div>
        <motion.div
            initial={{
                opacity: 0,
                x: -1000
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 1.5
            }}

            whileHover={{
                rotateX: 20,
                rotateY: -10,
                cursor: 'pointer'
            }}
            style={{
                translateZ : 100
              }}
         className='w-[400px] mx-auto bg-slate-100 py-4 px-4 rounded-xl text-black '>
            <div
                
            >
                <h1 className='text-center text-4xl font-bold'>Welcome to Framer motion</h1>
                <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat nulla sunt dolore? Ducimus architecto ad eligendi enim est provident eius, qui animi? Similique aperiam pariatur excepturi sit suscipit, unde provident fugit, molestias aut incidunt velit repellendus quod nulla? Eum.</p>

                <motion.button
                    whileHover={{
                        scale: 1.1,
                        rotate: 0 ,
                        boxShadow: '3px 3px 60px 8px royalblue'
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    
                className='bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 has been copied to your clipboard mx-auto px-4 py-2 rounded-lg text-white font-bold mt-4 cursor-pointer shadow-sm shadow-black'>
                    Motion Button 
                </motion.button>
            </div>
        </motion.div>
      
    </div>
  )
}

export default FramerMotionAnimate
