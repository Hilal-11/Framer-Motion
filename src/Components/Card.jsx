import React, { useState } from 'react'
import reactImage from '../assets/react.svg'
import { AnimatePresence, motion } from 'motion/react'
function Card() {

    const [open , setOpen] = useState(true)
  return (
    <div className={
        'w-full h-svh bg-white flex justify-center items-center text-black'
    }
    style={{
        backgroundImage: 'radial-gradient(circle at 0.5px 0.5px , rgba(90,110,114,0.7) 1px , transparent 0.5px)',
        backgroundSize: "10px 10px",
        backgroundRepeat : "repeat"
      }}
    >

    <>
    <AnimatePresence>
       {open && <motion.div
        initial={{
            opacity: 0,
            scale: 0.98,
            filter: 'blur(12px)'
        }}
        animate={{  
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
        }}
        exit={{ 
            opacity: 0,
            scale: 0.98,
            filter: 'blur(12px)'

        }}
        transition={{
            duration: 0.5,
            ease: 'easeInOut'

        }}
       className=
            "w-80 h-[34rem] bg-white rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 ring-1 ring-neutral-300 flex flex-col">
            
            <h1 className='font-bold text-[14px]'>Organization UI Components</h1>
            <p className='text-[14px] font-thin py-2'>Clerk's UI components add turn-key simplicity to complex Organization management tasks.</p>
            <div className='flex justify-center py-2'>
                <button 
                    onClick={() => setOpen(false)}
                    className='shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-5 py-1 rounded-md font-bold cursor-pointer'
                >Webmastery</button>
            </div>

            <div className='relative my-4 flex-1 bg-gray-100 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-5 py-1'>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        filter: 'blur(12px)'

                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.05,
                        filter: 'blur(0px)'

                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                    }}
                className='border border-neutral-200 absolute inset-0 w-full h-full rounded-lg bg-white divide-y divide-neutral-200 scroll-py-2'>
                    <div className='flex gap-2 p-5'> 
                        <div>
                            <img src={reactImage} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-[12px]'>Web Mastery.pro</h1>
                            <p className='font-thin text-[11px]'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-5'> 
                        <div>
                            <img src={reactImage} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-[12px]'>Web Mastery.pro</h1>
                            <p className='font-thin text-[11px]'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-5'> 
                        <div>
                            <img src={reactImage} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-[12px]'>Web Mastery.pro</h1>
                            <p className='font-thin text-[11px]'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-5'> 
                        <div>
                            <img src={reactImage} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-[12px]'>Web Mastery.pro</h1>
                            <p className='font-thin text-[11px]'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-2 justify-center text-[12px] text-gray-500 font-medium'> 
                        <div>
                           <button>Create Project</button>
                        </div>
                    </div>


                </motion.div>
            </div>
        </motion.div>
       }
    </AnimatePresence>
    </>

    </div>
  )
}

export default Card
