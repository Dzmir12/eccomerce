import { useContext, useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import pic from "./../../assets/product_4.png";
import { motion } from "framer-motion";
import data from "../Assets/all_product";
import bush from "./../../assets/icons8-bush-48.png";
import truck from "./../../assets/icons8-truck-100.png";
import { ClikedProduct, Color, Count, IsBtnClicked, IsColorClicked, IsProductClicked, Product, Size } from "../../ContextApi/ContextApi";



function ProductInfo({ produductid }) {

  const [product, setProduct] = useContext(Product);
  const [color,setColor]=useContext(Color)
  const [size,setSize]=useContext(Size)
  const [count,setCount]=useContext(Count)
  const [isBtnClicked,setIsBtnClicked]=useContext(IsBtnClicked)
  const [isColorClicked,setIsColorClicked]=useContext(IsColorClicked)
  // const [color,setColor]=useState('')
  // const [size,setSize]=useState('SM')
  // const [count,setCount]=useState('0')
  // const [isBtnClicked,setIsBtnClicked]=useState(false)
  // const [isColorClicked,setIsColorClicked]=useState(false)
  // const [product, setProduct] = useState([]);
  const [clikedProduct, setClikedProduct] = useContext(ClikedProduct);
  const [isProductClicked,setIsProductClicked]=useContext(IsProductClicked)
 

  
 
 

  // console.log(params);

function colorClicked(e) {
  setColor(e.target.value);
  setIsColorClicked(true);
}

function sizeClick(e) {
  setSize(e.target.value);
}

function decrementCount() {
  const existingProductIndex = clikedProduct.findIndex(
    (item) =>
      item.id === product[0].id &&
      item.color === color &&
      item.size === size
  );

  if (existingProductIndex !== -1) {
    const updatedProducts = [...clikedProduct];
    if (updatedProducts[existingProductIndex].count > 1) {
      updatedProducts[existingProductIndex].count -= 1;
    } else {
      updatedProducts.splice(existingProductIndex, 1);
    }
    setCount(count - 1);
    setClikedProduct(updatedProducts);
  }
}

function incrementCount() {
  const newProduct = {
    id: product[0].id,
    name: product[0].name,
    color: color,
    size: size,
    count: count + 1,
    price: (product[0].new_price * (count + 1)),
    image: product[0].image,
  };

  const existingProductIndex = clikedProduct.findIndex(
    (item) =>
      item.id === newProduct.id &&
      item.color === newProduct.color &&
      item.size === newProduct.size
  );

  if (existingProductIndex !== -1) {
    const updatedProducts = [...clikedProduct];
    updatedProducts[existingProductIndex] = newProduct;
    setClikedProduct(updatedProducts);
  } else {
    setClikedProduct([...clikedProduct, newProduct]);
  }
  setCount(count + 1);
}

function btnClicked() {
  if (isColorClicked) {
    setIsBtnClicked(true);
  }
}

useEffect(() => {
  if (produductid) {
    setProduct(data.filter((item) => item.id == produductid));
  }

  const existingProduct = clikedProduct.find(
    (item) =>
      item.id == produductid && item.color === color && item.size === size
  );
  if (!existingProduct) {
    setCount(0);
    setIsBtnClicked(false);
  } else {
    setCount(existingProduct.count);
    setSize(existingProduct.size);
    setColor(existingProduct.color)
    setIsBtnClicked(true);
  }
}, [produductid, color, size, clikedProduct]);


  return (
    <section className="bg-gradient-to-r from-[#505064] to-[#111132] flex justify-evenly max-[900px]:flex-col ">
      <Menu yellowLeft2={'13rem'} perpleLeft2={'15.6rem'}/>
      {product.map((item, i) => {
        return (
          <div
            className="w-full h-full flex justify-evenly max-[900px]:flex-col"
            key={i}
          >
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-[40%] h-[100vh]  flex items-center justify-center max-[900px]:w-[100%] max-[900px]:h-[50vh]  "
            >
              <motion.img
                whileTap={{ rotateY: 360 }}
                src={item.image}
                alt=""
                className="w-[33rem] h-[39rem] mt-[4.5rem] rounded-[6.5rem] cursor-pointer max-[1000px]:h-[36rem] max-[900px]:mt-[6.5rem] max-[900px]:h-[27rem] max-[900px]:w-[27rem] max-[900px]:text-center max-[456px]:h-[53vh] max-[456px]:w-[83%] max-[456px]:mt-[5.5rem] max-[384px]:w-[90%]"
              />
            </motion.div>

            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className=" relative w-[56%] h-[100vh] flex items-center justify-center max-[900px]:w-[100%] max-[900px]:h-[50vh]"
            >
              <div className="w-[55%] h-[62vh] rounded-full bg-purple-300 absolute left-[21rem] filture blur-2xl max-[1269px]:hidden max-[900px]:hidden"></div>
              <div className="w-[55%] h-[62vh] rounded-full bg-yellow-300 absolute left-[0rem] filture blur-2xl max-[900px]:h-[36vh] max-[900px]:w-[56%] max-[900px]:top-[5.5rem] max-[900px]:left-[5rem] max-[627px]:left-[2rem] max-[552px]:left-[1%] "></div>
              <div className="w-[55%] h-[62vh] rounded-full bg-pink-300  absolute left-[12rem] filture blur-2xl max-[1269px]:left-[18rem] max-[1092px]:left-[15rem] max-[921px]:left-[14rem]  max-[900px]:h-[36vh] max-[900px]:w-[56%] max-[900px]:top-[5.5rem] max-[900px]:left-[17rem] max-[627px]:left-[15rem] max-[552px]:left-[41%] "></div>

              <div className="absolute z-20 w-full h-full">
                <motion.p
                  whileTap={{ rotateX: 360 }}
                  className="  text-[4rem] text-white mt-[13.5rem] cursor-pointer max-[1149px]:mt-[7.5rem] max-[900px]:mt-[5rem] max-[900px]:text-[2.5rem] max-[900px]:text-center  px-[10px] max-[562px]:text-[2rem] max-[456px]:mt-[3.5rem] max-[332px]:text-[1.5rem]  "
                >
                  {item.name}
                </motion.p>

                <div className="relative flex color-container h-[3.5rem] w-full mt-[1rem] mb-[1rem] max-[900px]:mt-[0rem] max-[900px]:mb-[0rem] max-[900px]:top-[3.8rem] max-[900px]:left-[44%] max-[900px]:w-[45%] max-[669px]:left-[41%] max-[456px]:left-[36%] max-[332px]:left-[31%] ">
                  {item.colors.map((color, i) => {
                    return (
                      <motion.button
                        key={i}
                        className={`min-w-[3.5rem]  min-h-[3.5rem] border-4 rounded-full  absolute   cursor-pointer max-[900px]:min-w-[3.5rem] max-[900px]:min-h-[3.5rem]`}
                        style={{
                          backgroundColor: color,
                          zIndex: i * 10,
                          left: i * 30,
                        }}
                        value={color}
                        whileTap={{ scale: 0.9 }}
                        onClick={colorClicked}
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col items-baseline w-full max-[900px]:mt-[-3.2rem] max-[900px]:gap-[3rem] max-[900px]:items-center ">
                  <div>
                    <select
                      onClick={sizeClick}
                      className="min-w-[15rem] min-h-[3rem] rounded-md appearance-none p-[13px] outline-none cursor-pointer"
                    >
                      {item.size.map((item, i) => {
                        return (
                          <option key={i} value={item}>
                            Size-{item}{" "}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="mt-[1rem] relative ">
                    <motion.button
                      className="  min-w-[15rem] flex  justify-center items-center min-h-[3rem] rounded-3xl bg-blue-500 text-white p-[13px] cursor-pointer border-2"
                      value={"btn"}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        backgroundColor:!isColorClicked
                          ? "gray"
                          : color,
                        cursor:!isColorClicked
                          ? "not-allowed"
                          : "pointer",
                      }}
                      onClick={btnClicked}
                      disabled={!isColorClicked}
                    >
                      {isBtnClicked ? (
                        <>
                          <motion.img
                            animate={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                            src={bush}
                            alt=""
                            className="w-[2rem] top-[1.5rem] left-[3rem] absolute z-20"
                          />{" "}
                          <motion.img
                            animate={{ opacity: 0, x: 175 }}
                            transition={{ duration: 2 }}
                            src={truck}
                            alt=""
                            className="absolute top-[-.8rem] w-[4rem] left-[0rem] z-10"
                          />{" "}
                          <motion.img
                            animate={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                            src={bush}
                            alt=""
                            className="w-[2rem] top-[.1rem] left-[11rem] absolute z-0"
                          />
                          <div className="flex items-center w-full justify-evenly">
                            <motion.button
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2 }}
                              className="min-w-[2rem]  border-2 min-h-[2rem] z-40 rounded-full"
                              whileTap={{ scale: 1.5 }}
                              onClick={decrementCount
                              }
                            >
                              -
                            </motion.button>{" "}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2 }}
                            >
                              {count}
                            </motion.div>{" "}
                            <motion.button
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2 }}
                              className="min-w-[2rem]  min-h-[2rem]  border-2 z-40 rounded-full"
                              whileTap={{ scale: 1.5 }}
                              onClick={incrementCount
                              }
                            >
                              +
                            </motion.button>
                          </div>
                        </>
                      ) : (
                        `Add-${item.new_price}$`
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}

export default ProductInfo;





