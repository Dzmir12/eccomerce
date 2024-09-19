import StylizedLogo from "../StylizedLogo/StylizedLogo"
import homeIcon from './../../assets/icons8-home-64.png'
import category from './../../assets/icons8-slip-dress-64.png'
import onlineshop from './../../assets/icons8-online-shopping-64.png'
import login from './../../assets/icons8-login-64.png'
import { motion } from "framer-motion"
import { Link, useLocation} from "react-router-dom"
import { useContext } from "react"
import { ClikedProduct, ViewportWidth } from "../../ContextApi/ContextApi"
import { Drawer } from 'vaul';
import StarIcon from "../StarIcon/StarIcon"
import SpiningStarOrbit from "../SpiningStarOrbit/SpiningStarOrbit"
import Authentication from "../../Pages/Authentication/Authentication"




const icons = [
  homeIcon,
  login,
  'logo', // Placeholder to identify where the logo should be inserted
  category,
  onlineshop,
];

function Menu({left,top,position,perpleLeft,yellowLeft,perpleLeft2,yellowLeft2}) {
  const location =useLocation()
  const url= location.pathname.split('/').filter((x)=>x)
  console.log(url)
  const [clikedProduct, setClikedProduct] = useContext(ClikedProduct);
  const totalCount = clikedProduct.reduce((total, item) => total + item.count, 0);
  const [viewportWidth, setViewportWidth] = useContext(ViewportWidth);


  return (
    
    <div className="w-[65%] h-[11%] top-[1.5rem] left-[15rem] fixed  flex justify-center items-center  max-[1660px]:top-[.5rem]  max-[900px]:left-[17.5%] max-[383px]:top-[.5rem]  z-[9999]  " style={{top:top,left:left,position:position}}>
        
    <motion.div  className=" relative w-[.7rem] h-[.7rem] bg-yellow-400 rounded-full left-[14rem] -z-20 max-[1203px]:!left-[63%] max-[1203px]:hidden"  initial={{x:0}} animate={{x:-164}} transition={{duration:2,repeat:Infinity}} style={{position:position,left:viewportWidth <1660?yellowLeft2:yellowLeft}} ></motion.div>
    <motion.div className=" relative w-[.7rem] h-[.7rem] bg-indigo-500 rounded-full left-[25.6rem] -z-20 max-[1203px]:!left-[32%] max-[1203px]:hidden"  initial={{x:0}} animate={{x:164}} transition={{duration:2,repeat:Infinity}} style={{position:position ,left: viewportWidth <1660?perpleLeft2:perpleLeft}}></motion.div>
    
      {icons.map((item, i) => {
        // Check if the current item is the placeholder for the logo
        if (item === 'logo') {
          return (
          <div className="flex items-center" key={i}>
            <StylizedLogo />
            <div className="signal-line max-[1660px]:hidden max-[900px]:hidden"></div>
          </div>
          );
        }
        return ( 
          <>
          {item == login ? 
           <Drawer.Root shouldScaleBackground>
           <Drawer.Trigger asChild>
           <div className="flex items-center" key={i}>
            
            <motion.button     className="flex relative items-center justify-center p-2 border rounded-full aspect-square shrink-0 border-violet-50/30 bg-violet-50/25 h-[4rem] cursor-pointer">
           
              <motion.img src={item} alt="" whileHover={{y:2}} whileTap={{ scale: 0.9 }}/>
            <div className="bg-orange-400 text-white w-[1.5rem] h-[1.5rem] top-0 left-[2.5rem] rounded-full absolute z-10" style={{display:item === onlineshop ?'':'none'}}>{totalCount}</div>
            </motion.button>
            <div className="signal-line rotat-[20deg] max-[1660px]:hidden max-[900px]:hidden" style={{display:item === onlineshop ?'none':''}}></div>
            </div> 
           </Drawer.Trigger>
            
         <Drawer.Portal>
           <Drawer.Overlay className="fixed inset-0 bg-black/40" />
           <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0  h-[75vh] z-[9999] max-[1700px]:h-[82vh] max-[851px]:h-[94vh]">
                <Drawer.Title className="font-medium ">
                 </Drawer.Title>
             <div className=" relative p-4 bg-gradient-to-r from-[#111132] to-[#505064] rounded-t-[10px] flex-1 flex flex-col items-center justify-evenly overflow-hidden ">
              {[...Array(4)].map((_,i)=>{
          return(<div key={i} className="z-0 hero-ring" style={{width:i===0?'40rem':i===1?'60rem':i===2?'80rem':'100rem',height:i===0?'40rem':i===1?'60rem':i===2?'80rem':'100rem'}} ></div> )
             })}
            {[...Array(12)].map((_,i)=>{
          return(<SpiningStarOrbit key={i} orbitHight={i<=4?'54rem':i<=8?'64rem':'74rem'} orbitWidth={i<=4?'54rem':i<=8?'64rem':'74rem'} rotate={i==0?'':i==1?'45deg':`${45+(i*50)}deg`}>
            <StarIcon starHight={i<=4?'7rem':i<=8?'5rem':'9rem'} starWidth={i<=4?'7rem':i<=8?'5rem':'9rem'} />
            </SpiningStarOrbit>)
             })}
               <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-three-color-gradient mb-8" />
               <div className="flex items-center justify-center w-[50rem] h-full">
                <Authentication/>
               </div>
             </div>
             <div className="p-4 mt-auto border-t bg-three-color-gradient border-zinc-200">
               <div className="flex justify-end max-w-md gap-6 mx-auto">
                
               </div>
             </div>
           </Drawer.Content>
         </Drawer.Portal>
       </Drawer.Root>
            
            : <div className="flex items-center" key={i}>
            
            <motion.button     className="flex relative items-center justify-center p-2 border rounded-full aspect-square shrink-0 border-violet-50/30 bg-violet-50/25 h-[4rem] cursor-pointer">
            <Link to={item == homeIcon ?"/":item == category?`/products/${url[1]}`:item == onlineshop?`/products/${url[1]}/CartPage`:item == login ?'/Authentication':''}>
              <motion.img src={item} alt="" whileHover={{y:2}} whileTap={{ scale: 0.9 }}/>
            </Link>
            {totalCount==0?'': <div className="bg-orange-400 text-white w-[1.5rem] h-[1.5rem] top-0 left-[2.5rem] rounded-full absolute z-10" style={{display:item === onlineshop ?'':'none'}}>{totalCount}</div>}
            </motion.button>
            <div className="signal-line rotat-[20deg] max-[1660px]:hidden max-[900px]:hidden" style={{display:item === onlineshop ?'none':''}}></div>
            </div>}
          </>
          
          
        );
      })}
           </div>
  );
}

export default Menu;
