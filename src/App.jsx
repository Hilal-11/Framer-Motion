import React from 'react'
import Button1 from './Components/Button1'
import Button2 from './Components/Button2'
import FramerMotionAnimate from './Components/FramerMotionAnimate'
import LoadingBar from './Components/LoadingBar'
import Keyframes from './Components/Keyframes'
import { motion } from 'motion/react'
import Gusters from './Components/Gusters'
import DragableBox from './Components/DragableBox'
import Card from './Components/Card'
import Ourcastration from './Components/Ourcastration'
const App = () => {
  return (
  
    <div className='h-[4000px] bg-neutral-950 text-white'
    style={{
      backgroundImage: 'radial-gradient(circle at 0.5px 0.5px , rgba(90,110,114,0.7) 1px , transparent 0.5px)',
      backgroundSize: "10px 10px",
      backgroundRepeat : "repeat"
    }}
    >
    <div>
      <motion.div
        initial={{
          opacity: 0,
          x: -1000,
          
        }}
        animate={{
          opacity: 1,
          x: 0,
          
        }}
        transition={{
          duration: 1.5,
          delay: 1
        }}
    className='px-10 py-10 h-auto w-full'
        >
          <motion.div
            
          className='flex justify-center gap-10'>
            <Button1 />
            <Button2 />
          </motion.div>

          <div className='py-20'>
            <FramerMotionAnimate />
          </div>

          <div>
            <LoadingBar />
          </div>
          <div>
            <Keyframes/>
          </div>
          <div>
            <Gusters/>
          </div>
          <div>
            <DragableBox />
          </div>
        </motion.div>
      </div>
        
        <div className=''>
          <Card/>
        </div>
      <div className='my-20'> 
        <Ourcastration />
      </div>
    </div>
      
  )
}

export default App
