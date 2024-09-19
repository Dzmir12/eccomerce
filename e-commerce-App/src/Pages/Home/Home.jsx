import { motion } from "framer-motion";
import Category from "../../components/Category/Category";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";



function Home() {


  return (
   
    <motion.div className="w-full h-full" >
      <ParallaxSection/>
      <Category />
    </motion.div>
    
  );
}

export default Home;
