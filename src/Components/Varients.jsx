
import { useState } from 'react'
import { motion } from 'motion/react'
function Varients() {

    const [isOpen , setIsOpen] = useState(false)

    const sideBarVarient = {
        open: {
            height: "270px",
        },
        close: {
            height: "0",
        }
    }
    const parentVarient = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },  
        close: {
             transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            }
        }
    }
    const childVarient = {
         close: {
            opacity: 0,
            x: -10
        },
        open: {
            opacity: 1, 
            x: 0
            
        }
       
    }


    const menuItems = [
        {
            id: 1,
            menuItem: "Authentication"
        },
        {
            id: 2,
            menuItem: "Documentation"
        },
        {
            id: 3,
            menuItem: "Autherization"
        },
        {
            id: 4,
            menuItem: "Convex | Stripe"
        },
        {
            id: 5,
            menuItem: "MongoDB | Postgress"
        },
        {
            id: 6,
            menuItem: "Aws | Vercel | Netlify"
        }
    ]


    
  return (
    <div className='w-[260px] h-auto mx-auto bg-neutral-200 my-10 text-black rounded-md'>
        
        <div className='flex items-center justify-center gap-6 pb-2 py-2'>
            <button onClick={() => setIsOpen(!isOpen)} className='px-5 py-px rounded-sm shadow-sm bg-white'>{isOpen ? "Close" : "Open"}</button>
            
        </div>
        <motion.nav
                initial={false}
                variants={sideBarVarient}
                animate={isOpen ? "open" : "close"}
                transition={{ duration: 0.3 }}
                exit={"close"}
             className='flex justify-center items-center overflow-hidden px-4'>
            <motion.ul
             variants={parentVarient}
             className='flex flex-col space-y-3 w-full'>
                {
                    menuItems.map((item) => (
                        <motion.li key={item.id}
                            variants={childVarient}
                            transition={{ duration: 0.98}}
                            className='bg-white py-1 shadow-sm rounded-sm px-4 w-full'>
                            {item.menuItem}
                        </motion.li>
                    ))
                }
            </motion.ul>
        </motion.nav>
    </div>
  )
}

export default Varients
