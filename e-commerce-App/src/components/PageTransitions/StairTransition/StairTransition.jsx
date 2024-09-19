import { motion } from "framer-motion"
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom"


function StairTransition({children}) {

    const params = useParams([]);
    

   const anim=(variants,custom)=>{
    return{
        initial:'initial',
        animate:'enter',
        exit:'exit',
        variants,
        custom
    }
   }
   
   const expand={
    initial:{
        right:0
    },
    enter: (i)=>({
        right:'100%'
        ,transition:{
            duration:1 ,
            delay:0.05*i
        }, 
        transitionEnd:{
            width:0,
            right:0
        }
    }),
    exit: (i)=>({
        width:'100vw'
        ,transition:{
            duration:0.4 ,
            delay:0.05*i
        }
    })
   
   }

   
   

  return (
    <div className='w-full h-full'>
        <div className='fixed top-0 left-0 z-50 flex flex-col w-full h-full pointer-events-none'>
         
            {
                [...Array(5)].map((_,i) =>{
                   return <motion.div key={i} {...anim(expand,i)}  className='relative z-50 w-full h-full bg-red-600' >
                   {/* <p className={"text-[5rem] text-red-600 " + {i===2?'':'hidden'}} >{params.id}</p> */}
                   {i===2?<>
                   <motion.p initial={{opacity:1}} animate={{opacity:0}} transition={{duration:1}} className="text-[5rem] text-blue-600 absolute left-[4rem] z-50 ">{params.id}</motion.p>
                   </>:<>
                   <p  className="text-[5rem] text-blue-600 hidden">{params.id}</p>
                   </>}
                     </motion.div>
                
                })
            }
        </div>

        {children}
    </div>
  )
}

export default StairTransition