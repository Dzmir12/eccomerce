import { motion } from "framer-motion"
function StylizedLogo() {
  return (
    <motion.div  whileTap={{ scale: 0.9 }} className="glass-container2 p-[5px] flex items-center justify-center">
        <motion.p  className="text-[3rem]  text-white  shadow-red p-[8px] -mt-[.7rem] max-[1203px]:hidden">trendup</motion.p>
        <motion.p  className="text-[3rem] bg-clip-text text-transparent bg-custom-gradient p-[8px] -mt-[.7rem] min-[1203px]:hidden">t</motion.p>
    </motion.div>
   
  )
}

export default StylizedLogo