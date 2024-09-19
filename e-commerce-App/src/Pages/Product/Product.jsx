import { useParams } from "react-router-dom";

import { motion } from "framer-motion";
import ProductInfo from "../../components/ProuductInfo/ProductInfo";
import CommentSystem from "../../components/CommentSystem/CommentSystem";


function Product() {
  const produductid = useParams([]);
  return (
    
    <motion.div className="w-full h-full" >
     <ProductInfo produductid={produductid.id}  />
     <CommentSystem />
    </motion.div>
  )
}

export default Product


