// main
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import data from "./../../components/Assets/all_product";
import data2 from "./../../components/Assets/new_collections";
import { useContext, useEffect, useState } from "react";
import SVGContainer from "../../components/SVGContainer/SVGContainer";
import "./../Products/product.css";
import {  motion } from "framer-motion";
import { useRef } from "react";
import Menu from "../../components/Menu/Menu";




function Products() {
  const [categoryClicked, setCategoryClicked] = useState([]);
  const [width, setWidth] = useState(null);
  const carousel = useRef();
  const params = useParams();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("");
 

  
  console.log(params.id)

  const getRandomPath = () => {
    const path = [
      "M0 52C0 23.2812 23.0408 0 51.4629 0H422.537C450.959 0 474 23.2812 474 52V380C474 408.719 450.719 432 422 432H406.755C378.332 432 355.292 455.281 355.292 484V520C355.292 548.719 332.011 572 303.292 572H51.4629C23.0408 572 0 548.719 0 520V52ZM405.988 53.5493L394.879 19L383.769 53.5493H347.817L376.903 74.9019L365.793 109.451L394.879 88.0981L423.964 109.451L412.854 74.9019L441.94 53.5493H405.988Z",
      "M0 52C0 23.2812 23.0408 0 51.4629 0H294.385C323.103 0 346.385 23.2812 346.385 52V92C346.385 120.719 369.425 144 397.848 144H422C450.719 144 474 167.281 474 196V520C474 548.719 450.959 572 422.537 572H51.4629C23.0408 572 0 548.719 0 520V52ZM434.465 204.5C438.565 204.5 441.888 207.858 441.888 212V385C441.888 389.142 438.565 392.5 434.465 392.5C430.366 392.5 427.043 389.142 427.043 385V212C427.043 207.858 430.366 204.5 434.465 204.5Z",
      "M0 52C0 23.2812 23.0408 0 51.4629 0H422.537C450.959 0 474 23.2812 474 52V380C474 408.719 450.719 432 422 432H406.755C378.332 432 355.292 455.281 355.292 484V520C355.292 548.719 332.011 572 303.292 572H51.4629C23.0408 572 0 548.719 0 520V52ZM442.114 23.5864L344.145 22.2324C338.133 22.1494 333.193 27.0063 333.111 33.0811C333.028 39.1558 337.836 44.1475 343.847 44.2305L415.536 45.2212L349.108 110.531C344.799 114.768 344.704 121.732 348.898 126.086C353.091 130.44 359.983 130.536 364.292 126.299L430.72 60.9888L429.739 133.426C429.657 139.5 434.464 144.492 440.475 144.575C446.487 144.658 451.427 139.801 451.51 133.727L452.85 34.7358C452.932 28.6611 448.125 23.6694 442.114 23.5864Z",
      "M0 54C0 24.1768 24.1768 0 54 0H424.947C454.771 0 478.947 24.1768 478.947 54V518C478.947 547.823 454.771 572 424.947 572H189C159.177 572 135 547.823 135 518V477C135 447.177 110.823 423 81 423H54C24.1766 423 0 398.823 0 369V54ZM436.18 24.6904L337.328 30.1011C331.262 30.4331 326.614 35.6196 326.946 41.686C327.278 47.752 332.464 52.4004 338.531 52.0684L410.866 48.1089L354.808 110.659C350.754 115.183 351.134 122.137 355.659 126.192C360.183 130.246 367.137 129.866 371.192 125.341L427.249 62.792L431.208 135.127C431.541 141.193 436.727 145.842 442.793 145.51C448.859 145.178 453.508 139.991 453.176 133.925L447.765 35.0728C447.433 29.0068 442.246 24.3584 436.18 24.6904Z",
      "M51.4629 0C23.0408 0 0 23.2812 0 52V520C0 548.719 23.0408 572 51.4629 572H422.537C450.959 572 474 548.719 474 520V293.5H411.703C407.604 293.5 404.28 290.142 404.28 286C404.28 281.858 407.604 278.5 411.703 278.5H474V256.5H411.703C407.604 256.5 404.28 253.142 404.28 249C404.28 244.858 407.604 241.5 411.703 241.5H474V196C474 167.281 450.719 144 422 144H399.827C371.405 144 348.364 120.719 348.364 92V52C348.364 23.2812 325.083 0 296.364 0H51.4629Z",
      "M424.947 0H170C140.177 0 116 24.1766 116 54V88C116 117.823 91.8232 142 62 142H52C23.2812 142 0 165.281 0 194V518C0 547.823 24.1768 572 54 572H424.947C454.771 572 478.947 547.823 478.947 518V284.5H414C410.41 284.5 407.5 281.59 407.5 278C407.5 274.41 410.41 271.5 414 271.5H478.947V250.5H414C410.41 250.5 407.5 247.59 407.5 244C407.5 240.41 410.41 237.5 414 237.5H478.947V54C478.947 24.1768 454.771 0 424.947 0Z",
    ];
    const randomIndex = Math.floor(Math.random() * path.length);
    return path[randomIndex];
  };


  // Update paths recursively every second
  const updatePaths = () => {
    setCurrentPath(getRandomPath());
    setTimeout(updatePaths,1000);
  };

  useEffect(() => {
    const timeoutId = setTimeout(updatePaths, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  
  console.log(carousel.current)

  function categoryclicked(e) {
    console.log(e);
    console.log(e.target.id);
    // <Link to={window.location.href = `/products/${params.id}/product/${e.target.id}`} ></Link>
    // navigate(`/products/${params.id}/product/${e.target.id}`)
  }


  
  useEffect(() => {
    if (params.id === "women" || params.id === "MEN" || params.id === "Kids") {
      setCategoryClicked(data.filter((item) => item.category === params.id));
    } else if (params.id === "newColection") {
      setCategoryClicked(data2);
    } else if (params.id === "allProduct") {
      setCategoryClicked(data);
    } else {
      setCategoryClicked("404 not found");
    }
  }, [params.id]);
   
  console.log(`categoryClicked:${categoryClicked}`)
  
  useEffect(() => {
    // Update width after component is rendered
    const timeout = setTimeout(() => {
      if (carousel.current) {
        const newWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
        // console.log("New Width:", newWidth);
        // console.log("scrollWidth:", carousel.current.scrollWidth);
        // console.log("offsetWidth:", carousel.current.offsetWidth);
        setWidth(newWidth );
        Array.from(carousel.current.childNodes).forEach((item) => {
          item.style.opacity = 1;
          item.style.transform = "translateY(0)";
        });
      }
    }, 100); // Wait for 100ms
    return () => clearTimeout(timeout); // Clean up the timeout
  }, [categoryClicked,carousel]);
   

 

  return (
    <section className="flex items-center w-full  bg-gradient-to-t from-[#111132] to-[#505064]  ">
      {/* custom svg */}
      <SVGContainer />

      {/* carousel */}
      <motion.div
        ref={carousel}
        className="w-full overflow-hidden scroll-smooth pt-[16px] pb-[16px] mt-[6rem]"
      >
        {/* inner carousel */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right:1 }} // Adjust constraints
          className="flex gap-8 cursor-grab"
        >
          {categoryClicked.map((item, index) => (
            <>
            <motion.div
              key={index} 
              className="min-w-[25rem] min-h-[30rem] p-[20px] max-[382px]:min-w-[19rem] max-[383px]:p-[5px] max-[383px]:min-h-[23rem] max-[320px]:min-w-[17rem]  glass-container  "
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1,delay:index*.09}}
             
            >
              <svg viewBox="0 0 474 572" >
                <clipPath id={`border-${item.id}`}>
                  <path d={getRandomPath()} />
                </clipPath>
                <Link to={ `/products/${params.id}/product/${item.id}`} >
                < motion.image
                  href={item.image}
                  clipPath={`url(#border-${item.id})`}
                  width="101%"
                  height="100%"
                  className="cursor-pointer"
                  onClick={categoryclicked}
                  id={item.id}
                  
                />
                </Link>
              </svg>
               
                <div className=" relative min-w-[22rem] min-h-[9rem] rounded-[2rem] mt-[.5rem] glass-container2 max-[383px]:min-w-[18rem] max-[321px]:min-w-[16rem]">
                  {/* colerfull circle's */}
                  <div className="w-[7rem] h-[7rem] rounded-full bg-purple-300 absolute top-[1.5rem] left-[4rem] mix-blend-multiply filter blur-2xl "></div>
                  <div className="w-[7rem] h-[7rem] rounded-full bg-yellow-300 absolute top-[1.5rem] left-[12rem] mix-blend-multiply filter blur-2xl  "></div>
                  <div className="w-[7rem] h-[7rem] rounded-full bg-pink-300 absolute top-[1.8rem] left-[7.8rem] mix-blend-multiply  filter blur-2xl "></div>
                  <p className="text-[1.2rem] w-[17rem] text-center text-white absolute top-[1.2rem] left-[3rem] max-[383px]:left-[1rem] max-[321px]:left-[-.3rem] max-[321px]:text-[1rem]">{item.name}</p>
                  
                  <div className="w-[15rem] h-[4rem]  absolute top-[5rem] left-[3.3rem] flex items-center justify-around max-[383px]:left-[1.3rem] max-[321px]:left-[.3rem]">
                    <p className="text-[1.5rem]  text-gray-600 line-through pointer-events-none">{item.old_price}</p>
                    <p className="text-[2.2rem] text-white">→</p>
                    <motion.svg   width="153" className="absolute w-[4rem] left-[11rem] top-[-2.5rem]" height="171" viewBox="0 0 153 171" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "rgb(2,0,36)", stopOpacity: 1 }} />
                    <stop offset="35%" style={{ stopColor: "rgb(105,9,121)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgb(0,212,255)", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2,delay:1 }} d="M63.7304 170C-61.2117 -39.4482 138.903 -15.9815 151.345 39.0073C161.299 82.9985 55.2626 126.453 1 142.681" stroke="url(#grad1)" strokeWidth='.2rem' />
                    </motion.svg> 
                    <p className="text-[1.5rem] text-white">{item.new_price}</p>
                  </div>
                  
                </div>
              
            </motion.div>
          
            </>
          ))}
        </motion.div>
      </motion.div>

      <Menu params={params} yellowLeft2={'13rem'} perpleLeft2={'15.6rem'}/>
    </section>
  );
}

export default Products;


