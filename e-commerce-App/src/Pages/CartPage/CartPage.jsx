import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { ChoosenUserImage, ClikedProduct, Color, Count, Size, User, UserImage, UserInfo } from "../../ContextApi/ContextApi"
import { motion } from "framer-motion"
import Menu from "../../components/Menu/Menu"
import pic from './../../../src/assets/product_4.png'
import EMPTEY from './../../../src/assets/3dgirl.png'
import { Link, useLocation } from "react-router-dom"
import Button from "../../components/Button/Button"




function CartPage() {
  const [color,setColor]=useContext(Color)
  const [size,setSize]=useContext(Size)
  const [count,setCount]=useContext(Count)
  const [clikedProduct, setClikedProduct] = useContext(ClikedProduct);
  const [currentPath, setCurrentPath] = useState("");
  const [userImage, setUserImageImage] =useContext(UserImage);
  const [user,setUser] =useContext(User)
  const [userInfo,setUserInfo] =useContext(UserInfo)
  const [choosenUserImage,setChoosenUserImage] =useContext(ChoosenUserImage);
  const totalCount = clikedProduct.reduce((total, item) => total + item.count, 0);
  const containerRef=useRef();
  const location =useLocation()
  const url= location.pathname.split('/').filter((x)=>x)
  const today =new Date().getDay();
  const totalCost=clikedProduct.reduce((total, item) => total + item.price, 0);
  const days=['SU','M','T','W','T','F','SA'];
  const getRandomPath = useCallback(() => {
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
  }, []);

  // useEffect(() => {
  //   setInterval(()=>{
  //     setCurrentPath(getRandomPath());
  //   },6000)
  //   return () => clearInterval();
  // },);
 
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("UserInfo")) || [];
    setUserInfo(storedUserInfo);
    // const existPasswords = userInfo.map((item) => item.password);
    const existimages = userInfo.map((item) => item.image);
    const existNames = userInfo.map((item) => item.name);
    const userIndex = existNames.indexOf(user);
    if(userIndex !== -1){
      setChoosenUserImage(existimages[userIndex])
    }
    
}, []);

  return (
    
    <section ref={containerRef} className="flex w-full bg-[#111132] p-[20px] max-[1062px]:h-[100%] max-[1062px]:flex-col max-[1062px]:items-center max-[350px]:p-[7px] ">
      {/* <p> color:{color}</p>
      <p>size:{size}</p>
      <p>count:{count}</p>
      <p>Total Product Count: {totalCount}</p> */}

      {/* left part */}
      <motion.div drag dragConstraints={containerRef} whileDrag={{scale:.9}} className="w-[30%]  p-[20px] flex flex-col gap-5 max-[1062px]:w-[75%] max-[611px]:w-[100%] max-[383px]:p-[13px]">
        <motion.div  className="w-full  border-2 border-slate-600 h-[60vh] rounded-[3.5rem] flex flex-col justify-center items-center gap-[1rem]">
          {user?<> <div className="h-[13rem] w-[13rem] rounded-full bg-red-600">
            <img src={choosenUserImage} alt="" className="w-full h-full rounded-full" />
          </div>
          <h1 className="text-[3rem] text-slate-400">{user}</h1></>:<div className="z-30 flex items-center justify-center w-full h-full ">
            <p className="text-center text-slate-400 text-[4rem] ">YOUR NOT OUR MEMBER YET</p></div>}
         
        </motion.div>
        <motion.div  className="w-full relative border-2 border-slate-600 h-[40vh] rounded-[3.5rem] flex justify-center items-center overflow-hidden">
        <motion.p  className="text-[3rem] text-white  shadow-red absolute ">trendup</motion.p>
        {[...Array(5)].map((_,i)=>{
          return(<div key={i} className="h-[13rem] w-[13rem]  absolute rounded-full border-2 border-slate-600 animate-blob delay-75" style={{ animationDelay: i==0 ? '0ms': i==1?'200ms':i==2?'400ms':i==3?'600ms':'800ms',height:i==0 ? '13rem': i==1?'16rem':i==2?'19rem':i==3?'22rem':'25rem',width:i==0 ? '13rem': i==1?'16rem':i==2?'19rem':i==3?'22rem':'25rem',borderColor:i==1?'#dc2626':i==2?'#4f46e5':i==3?'#16a34a':'#475569'}}></div>)
        })}
        </motion.div>
      </motion.div>
      {/* right part */}
      <div className="w-[70%]  flex gap-5 max-[1062px]:flex-col max-[1062px]:items-center max-[1062px]:w-[100%]  ">
        {/* left part */}
        <motion.div drag dragConstraints={containerRef} whileDrag={{scale:.9}} className="w-[60%] h-full  flex flex-col p-[20px] gap-5 max-[1062px]:w-[77%] max-[611px]:w-[100%] max-[462px]:p-[0px]">
          <motion.div  initial={{scaleX:0}} whileInView={{scaleX:1,x:0}} transition={{duration:1}} className="w-full h-[16vh] border-2 rounded-[3.5rem] border-slate-600 relative max-[1660px]:border-none max-[1062px]:border-solid "><motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}><Menu  left={'17.5%'} top={'3.5rem'} position={'absolute'} perpleLeft={'19.4rem'} yellowLeft={'5.4rem'} yellowLeft2={'40%'} perpleLeft2={'58%'}/> </motion.div></motion.div>
          <motion.div  initial={{scaleY:0}} whileInView={{scaleY:1,x:0}} transition={{duration:1.5,delay:2}} className="w-full h-[80vh] border-2 rounded-[3.5rem] border-slate-600 flex flex-col justify-center items-center gap-2">
          <h4 className="mb-1 text-white text-[3rem] font-semibold text-muted-foreground max-[350px]:text-center">
           {new Date().toLocaleString("default", { month: "long" }).toUpperCase()}{" "}
           {new Date().getFullYear()}
          </h4>
          <div className="flex w-[25.5rem] gap-[2.4rem] max-[1185px]:gap-[1.9rem] max-[1185px]:w-[22.5rem] max-[420px]:gap-[1.2rem] max-[420px]:w-[18.5rem] max-[327px]:gap-[0.9rem] max-[327px]:w-[16.8rem]">
           {days.map((day,i)=>{return(<h1 key={i} className="text-white text-[2rem]">{day}</h1>)})}
           </div>
           <div className="flex gap-[.8rem]">
           {[...Array(7)].map((_,i)=>{
          return( <div key={i} className="h-[21rem] w-[3rem]   rounded-full border-2 border-slate-600 max-[1660px]:h-[17rem] max-[1185px]:w-[2.5rem] max-[420px]:w-[2rem] max-[327px]:w-[1.7rem] "><div className=" w-[3rem] rounded-full border-2 bg-three-color-gradient max-[1185px]:w-[2.5rem] max-[420px]:w-[2rem] max-[327px]:w-[1.7rem] " style={{height:`${totalCost >100 ?'100':totalCost}%`,display:i == today ? 'block' : 'none',border:totalCount===0?'none':'block'}}></div></div>)
        })}
           </div>
           <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-[2rem] max-[327px]:text-[1.9rem]">THIS Day SPENDING</h1>
            <h1 className="text-white text-[2.5rem]">{totalCost}$</h1>
           </div>
          </motion.div>
        </motion.div>
        {/* right part */}
        <motion.div drag dragConstraints={containerRef} whileDrag={{scale:.9}} className="w-[40%] h-full py-[20px] pr-[20px] max-[1062px]:w-[77%] max-[611px]:w-[100%] max-[611px]:p-[11px] max-[343px]:p-[4px] ">
          <motion.div  className="w-full h-full relative border-2 rounded-[3.5rem] border-slate-600 flex flex-col items-center gap-[2rem] p-[20px] overflow-y-scroll scroll-smooth hide-scroll" style={{justifyContent:totalCount == 0?'center':'',alignItems:totalCount == 0?'center':''}}>
         {totalCount == 0 ? <div> <p className="text-[4rem] text-white relative text-center max-[1302px]:text-[3rem] max-[1302px]:mb-[4rem]">your cart is empty</p> <img className="w-full max-[1302px]:h-[45vh]" src={EMPTEY} alt="" /></div> : 
         clikedProduct.map((item,i)=>{
          return(<div key={i} className="w-full h-[56%] z-10 glass-container flex flex-col  items-center rounded-full max-[1063px]:w-[49%] max-[840px]:w-[69%] max-[699px]:w-full  " style={{backgroundColor:item.color}}>
            <motion.div
              className=" h-[40vh] z-20 "
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1,delay:1*.09}}
             
            >
              <svg viewBox="0 0 474 572" className="w-full h-full" >
                <clipPath id={`border-${2}`}>
                  <path d={getRandomPath()} />
                </clipPath>
              <Link to={`/products/${url[1]}/product/${item.id}`}>
                < motion.image
                  href={item.image}
                  clipPath={`url(#border-${2})`}
                  width="101%"
                  height="100%"
                  className="cursor-pointer"
                  id={2}
                  
                />
             </Link>
              </svg>
               
               
              
            </motion.div>
            <div>
              <p className="text-[2rem] text-white flex justify-between w-[11rem]"> <span>{item.count}</span> x <span>{item.size}</span></p>
              {/* <div className="w-[11rem] rounded-full h-[3rem] border-[2px] border-white " style={{backgroundColor:item.color}}>
                
              </div> */}
            </div>
          </div>)
         })}
             <Button totalCount={totalCount} text='$' totalCost={totalCost} position='sticky' />
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  
  )
}

export default CartPage