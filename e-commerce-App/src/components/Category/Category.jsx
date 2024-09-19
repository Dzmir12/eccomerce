import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ViewportWidth } from "../../ContextApi/ContextApi";

function Category() {
    
  const [viewportWidth, setViewportWidth] = useContext(ViewportWidth);
 
  // useEffect(() => {

   
  //   const handleResize = () => {
  //     setViewportWidth(window.innerWidth);
  //   };

  //   // Attach the event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
   

  // target is img
  function categoryclicked(e) {
    console.log(e)
    console.log(e.target.name);
    <Link to={window.location.href = `/products/${e.target.name}`} ></Link>
    
  }
  
  // target is div 
  function categoryclicked2(e) {
    console.log(e)
    console.log(e.target.innerText);
    <Link to={window.location.href = `/products/${e.target.innerText}`} ></Link>
    
  }

  return (
    <section id="Category" className="flex w-full gap-[.5rem]  justify-center items-center  flex-wrap lg:overflow-y-hidden" >
    
      <motion.div className="w-full h-[95vh] flex gap-[.5rem] max-[1000px]:flex-wrap ">
        <motion.div className="flex flex-col w-[24%] h-[95vh] gap-[.5rem] justify-around max-[1000px]:w-[38%] max-[500px]:w-[100%]">
          {viewportWidth >= 1000 ? (
            <>
              <motion.div
                className="w-[100%] h-[34vh] cursor-pointer flex-col items-center justify-center flex relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                onClick={categoryclicked}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/img1%20(1).jpg?updatedAt=1703889884502"
                  alt=""
                  className="relative w-full h-full rounded-lg"
                  loading="lazy"
                  name="women"
                />
                <motion.div
                  className="absolute flex flex-col items-center justify-center w-full h-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  onClick={categoryclicked}
                >
                  <motion.img
                    src="https://ik.imagekit.io/dz12/tr:w-950/img1-woman.png?updatedAt=1704192307689"
                    alt=""
                    className="absolute w-full rounded-lg h-[34vh] z-10 lg:h-[34vh] "
                    loading="lazy"
                    name="women"
                  />
                  <motion.p className="absolute font-Brush text-[7rem] text-white  z-9 top-[-1.5rem] max-[799px]:text-[5.3rem] pointer-events-none">
                    WOMEN
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-[100%] h-[60vh] flex items-center justify-center relative cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
                value="newColection"
                onClick={categoryclicked}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/image2.png?updatedAt=1704115042153"
                  className="relative w-full h-full rounded-lg"
                  loading="lazy"
                  name="newColection"
                />
                <motion.div
                  className="absolute flex items-center justify-center w-full h-[65%] "
                  initial={{ opacity: 0, y: 100 }}
                  whileHover={{ opacity: 1, y: -11 }}
                  transition={{ duration: 1 }}
                  name="newCollections"
                  value="newColection"
                  // onClick={() =>
                  //   // (window.location.href = `/Products/new-colection`)
                  //   <Link to={window.location.href = `/Products/new-colection`}></Link>
                  // }
                  onClick={categoryclicked}
                >
                  <motion.img
                    src="https://ik.imagekit.io/dz12/tr:w-950/feamale3%20(1).png?updatedAt=1704115010203"
                    className=" absolute h-[32rem] rounded-lg w-[25rem] max-[1024px]:h-[17rem]"
                    name="newColection"
                    loading="lazy"
                  />
                  <motion.p
                    className="absolute font-Brush text-[1.5rem] text-white lg:text-[2rem] pointer-events-none"
                    value="newColection"
                  >
                    new collections
                  </motion.p>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="w-[100%] h-[34vh] cursor-pointer flex-col items-center justify-center flex relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                onClick={categoryclicked}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/img1%20(1).jpg?updatedAt=1703889884502"
                  alt=""
                  className="relative w-full h-full rounded-lg"
                  loading="lazy"
                  name="women"
                />
                <motion.div
                  className="absolute flex flex-col items-center justify-center w-full h-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  onClick={categoryclicked}
                >
                  <motion.img
                    src="https://ik.imagekit.io/dz12/tr:w-950/img1-woman.png?updatedAt=1704192307689"
                    alt=""
                    className="absolute w-full rounded-lg h-[34vh] z-10 lg:h-[34vh]"
                    loading="lazy"
                    name="women"
                  />
                  <motion.p className="absolute font-Brush text-[7rem] pointer-events-none text-white  z-9 top-[-1.5rem] max-[1000px]:text-[6.1rem] max-[799px]:text-[5.3rem] max-[693px]:text-[3.3rem] max-[693px]:top-[-0.9rem] max-[500px]:text-[5.3rem] max-[500px]:top-[-1.5rem]">
                    WOMEN
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-[100%] h-[60vh] flex items-center justify-center relative cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
                onClick={categoryclicked}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/image2.png?updatedAt=1704115042153"
                  className="relative w-full h-full rounded-lg"
                  loading="lazy"
                  name="newColection"
                />
                <motion.div
                  className="absolute flex items-center justify-center w-full h-[65%] "
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: -11 }}
                  transition={{ duration: 1, delay: 2 }}
                  value="newCollections"
                  onClick={categoryclicked}
                >
                  <motion.img
                    src="https://ik.imagekit.io/dz12/tr:w-950/feamale3%20(1).png?updatedAt=1704115010203"
                    className=" absolute h-[28rem] rounded-lg w-[23rem]"
                    loading="lazy"
                    name="newColection"
                  />
                  <motion.p className="absolute font-Brush text-[1.5rem] text-white lg:text-[2rem] pointer-events-none">
                    new collections
                  </motion.p>
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* center picture */}
        {viewportWidth >= 1000 ? (
          <>
            <motion.div
              className=" relative w-[30%] h-full max-[1000px]:w-[61%] max-[1180px]:w-[34%] max-[799px]:w-[60%] max-[500px]:w-[100%] flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              onClick={categoryclicked2}
              name='MEN'
            >
              <motion.img
                src="https://ik.imagekit.io/dz12/tr:w-950/img3%20(1).jpg?updatedAt=1703889900747"
                className="w-full h-full rounded-lg cursor-pointer"
                loading="lazy"
                name='MEN'
              />

              <motion.div
                className="absolute flex items-center justify-center w-full h-full text-center cursor-pointer "
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={categoryclicked2}
                name='MEN'
              >
                <motion.p className="font-Brush text-[14rem] pointer-events-none text-white absolute w-full h-[63vh] top-[15rem] text-center max-[1290px]:text-[12rem] ">
                  MEN
                </motion.p>
              </motion.div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              className=" relative w-[30%] h-full max-[1000px]:w-[61%] max-[1180px]:w-[34%] max-[799px]:w-[60%] max-[500px]:w-[100%] flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              onClick={categoryclicked2}
              name='MEN'
            >
              <motion.img
                src="https://ik.imagekit.io/dz12/tr:w-950/img3%20(1).jpg?updatedAt=1703889900747"
                className="w-full h-full rounded-lg cursor-pointer"
                loading="lazy"
                name='MEN'
              />

              <motion.div
                className=" absolute w-full h-[141vh] mt-[27rem] text-center flex items-center justify-center cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onClick={categoryclicked2}
                name='MEN'
              >
                <motion.p className="font-Brush text-[14rem] text-white absolute w-full h-full mt-[27rem] text-center max-[1290px]:text-[10rem] max-[1000px]:h-[90vh] max-[1000px]:top-[-15rem] pointer-events-none">
                  MEN
                </motion.p>
              </motion.div>
            </motion.div>
          </>
        )}

        {/* left picture */}

        <motion.div className="w-[45%]  h-full flex flex-col gap-[.5rem] max-[1000px]:w-[100%] max-[1000px]:flex-row max-[1000px]:h-[50vh] max-[500px]:flex-col max-[500px]:h-[67vh] ">
          {viewportWidth >= 1000 ? (
            <>
              <motion.div
                className="w-[100%]  h-[47vh] max-[1000px]:w-[50%] max-[500px]:w-[100%] relative flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, delay: 0.6 }}
                onClick={categoryclicked2}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/img5%20(1).jpg?updatedAt=1703889885536"
                  className="w-full h-full rounded-lg cursor-pointer"
                  loading="lazy"
                />

                <motion.div
                  className="absolute h-full border-black w-[80%] cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 40, scale: 1 }}
                  transition={{ duration: 1 }}
                  onClick={categoryclicked2}
                >
                  <motion.p className="absolute pointer-events-none font-Brush text-[10rem] text-white left-[0rem] top-[2rem] max-[1228px]:text-[7.5rem] max-[1228px]:top-[4rem] max-[1228px]:left-[-1rem] max-[1427px]:text-[9rem] max-[1427px]:top-[2rem]">
                    Kids
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-[100%]  h-[47vh] max-[1000px]:w-[50%] max-[500px]:w-[100%] relative flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, delay: 0.7 }}
                onClick={categoryclicked}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/img6%20(1).jpg?updatedAt=1703889891481"
                  className="w-full h-full rounded-lg cursor-pointer"
                  loading="lazy"
                  name='allProduct'
                />

                <motion.div
                  className="absolute w-full h-full "
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  onClick={categoryclicked}
                >
                  <motion.img
                    src="https://ik.imagekit.io/dz12/tr:w-950/img6-removebg-preview.png?updatedAt=1705840459025"
                    className="absolute h-[47vh] w-[100vh] z-10"
                    name='allProduct'
                  />
                  <motion.p
                    className="font-Brush text-[8rem] text-white pointer-events-none absolute w-[85%] h-[54%] top-[10rem] left-[4rem] max-[1524px]:text-[7rem] max-[1349px]:text-[6rem] max-[1188px]:text-[5rem] max-[1188px]:top-[10.5rem] max-[1050px]:left-[2rem]
                  "
                  >
                    AllProduct
                  </motion.p>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="w-[100%]  h-[47vh] max-[1000px]:w-[50%] max-[500px]:w-[100%] relative flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, delay: 0.6 }}
                onClick={categoryclicked2}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/img5%20(1).jpg?updatedAt=1703889885536"
                  className="w-full h-full rounded-lg cursor-pointer"
                  loading="lazy"
                />

                <motion.div
                  className="absolute h-full border-black w-[80%] cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x: 10, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                   onClick={categoryclicked2}
                >
                  <motion.p className="absolute font-Brush text-[10rem] pointer-events-none text-white left-[0rem] top-[2rem] max-[1000px]:left-[-3rem] max-[1000px]:text-[9rem] max-[928px]:text-[8rem] max-[787px]:text-[5rem] max-[787px]:top-[6rem] max-[787px]:left-[-2rem] max-[501px]:text-[8rem] max-[501px]:top-[3rem] max-[409px]:text-[6rem] max-[409px]:top-[2rem]">
                    Kids
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-[100%]  h-[47vh] max-[1000px]:w-[50%] max-[500px]:w-[100%] relative flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, delay: 0.7 }}
                onClick={viewportWidth >= 501 ? categoryclicked:categoryclicked2}
              >
                <motion.img
                  src="https://ik.imagekit.io/dz12/tr:w-950/img6%20(1).jpg?updatedAt=1703889891481"
                  className="w-full h-full rounded-lg cursor-pointer"
                  loading="lazy"
                  name='allProduct'
                />

                <motion.div
                  className="absolute w-full h-full "
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  onClick={viewportWidth >= 501 ? categoryclicked:categoryclicked2}
                  
                >
                  {/* <motion.img src="https://ik.imagekit.io/dz12/tr:w-950/img6-removebg-preview.png?updatedAt=1705840459025" className="absolute h-[47vh] w-[100vh] z-10 max-[501px]:h-[44vh] " /> */}
                  {viewportWidth >= 501 ? (
                    <>
                      <motion.img
                        src="https://ik.imagekit.io/dz12/tr:w-950/img6-removebg-preview.png?updatedAt=1705840459025"
                        className="absolute h-[47vh] w-[100vh] z-10 max-[501px]:h-[44vh] "
                        name='allProduct'
                      />
                    </>
                  ) : (
                    <>
                      <motion.img
                        src="https://ik.imagekit.io/dz12/tr:w-950/img6-removebg-preview.png?updatedAt=1705840459025"
                        className="absolute h-[47vh] w-[100vh] z-10 max-[501px]:h-[44vh] hidden"
                        name='allProduct'
                      />
                    </>
                  )}
                  <motion.p
                    className="font-Brush pointer-events-none text-[8rem] text-white absolute w-[85%] h-[54%] top-[10rem] left-[4rem]  max-[1000px]:text-[5rem] max-[1000px]:top-[10.5rem] max-[1000px]:left-[2rem] max-[848px]:text-[4rem] max-[848px]:top-[10.8rem] max-[848px]:left-[3rem]  max-[731px]:text-[3rem] max-[731px]:top-[11.8rem] max-[731px]:left-[2rem] max-[544px]:left-[1rem]
                   max-[501px]:w-[52%] max-[501px]:h-[19vh] max-[501px]:text-[5rem] max-[501px]:top-[7rem] max-[501px]:left-[2rem] max-[420px]:left-[1rem] max-[405px]:left-[2rem] max-[405px]:text-[4rem]  max-[344px]:left-[1rem] max-[344px]:text-[3.6rem]"
                  >
                    AllProduct
                  </motion.p>
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Category;
