import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '../AnimatedText/AnimatedText'
import { WhichBtnClicked } from '../../ContextApi/ContextApi'



function Button({text,totalCount,totalCost,top,position,left,choosenBtn,btnFunction,width,mt,off}) {
  const [whichBtnClicked,setWhichBtnClicked]=useContext(WhichBtnClicked)
  return (
    <div className='h-[4rem] w-[12rem]'>
    <motion.button  onClick={btnFunction} name={choosenBtn} whileTap={{scale:.8}} className="  w-[21%] p-[10px] z-10 text-white rounded-3xl glass-container bg-three-color-gradient  max-[1063px]:top-[91%] max-[1063px]:w-[63%]  max-[851px]:p-[7px]" style={{display:totalCount == 0?'none':'',top:top,position:position,left:left,backgroundImage:whichBtnClicked===choosenBtn?'':'none',width:width,marginTop:mt}}>
     <motion.p className='pointer-events-none' initial={{y:whichBtnClicked===choosenBtn?400:0}} animate={{y:whichBtnClicked===choosenBtn?0:400}} transition={{type:'spring', stiffness:47}}  >{totalCost}{text}</motion.p>
     <motion.p  initial={{opacity:whichBtnClicked!==choosenBtn?'0%':'100%'}} animate={{opacity:whichBtnClicked!==choosenBtn?'100%':'0%'}} transition={{delay:whichBtnClicked!==choosenBtn?.1:0}} style={{display:off=='off'?'none':''}} className='absolute pointer-events-none top-[.7rem] left-[3.5rem]' >{text}</motion.p>
      </motion.button>
     </div>
  )
}

export default Button
