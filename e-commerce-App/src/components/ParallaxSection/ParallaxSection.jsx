import { motion, useScroll, useTransform } from "framer-motion";
import cart from "./../../assets/shopping-cart-48.png";
import female from "./../../assets/Run Shopping (HD).png";
import { useRef } from "react";

function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const texty = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const plantsty = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const feamale = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  

  
  return (
    <section
      className="relative flex justify-center w-full h-[100vh] items-center  bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden overflow-x-hidden"
      ref={ref}
    >
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={cart}
          alt="shoppingcart"
          className="absolute "
          animate={{ x: 300, opacity: 0 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.p
          className="text-[6rem] text-white  shadow-red max-[359px]:text-[5.2rem] "
          style={{ y: texty }}
        >
          trendup
        </motion.p>
      </motion.div>
      <motion.img
        src={female}
        alt=""
        className="w-[15rem] absolute z-40 left-[23%] top-[73%] max-[697px]:left-[-1rem] "
        style={{ x: feamale }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />

      <motion.div className="absolute w-full h-[100vh] bg-bottom bg-cover bg-[url('/src/assets/mountains.png')] z-30"></motion.div>
      <motion.div
        className="absolute w-full h-[100vh] bg-bottom bg-cover bg-[url('/src/assets/planets.png')] z-20"
        style={{ y: plantsty }}
      ></motion.div>
      <motion.div
        className="absolute w-full h-[100vh] bg-bottom bg-cover bg-[url('/src/assets/stars.png')] z-10"
        style={{ x: plantsty }}
      ></motion.div>
    </section>
  );
}

export default ParallaxSection;
