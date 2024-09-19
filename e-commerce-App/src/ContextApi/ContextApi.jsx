import  { createContext, useEffect, useState } from 'react'

export const Color= createContext()
export const Size= createContext()
export const Count= createContext()
export const IsBtnClicked= createContext()
export const IsColorClicked= createContext()
export const ClikedProduct= createContext()
export const Product= createContext()
export const BtnClicked= createContext()
export const WhichBtnClicked= createContext()
export const IsProductClicked= createContext()
export const ViewportWidth= createContext()
export const UserImage= createContext()
export const UserInfo= createContext()
export const User= createContext()
export const ChoosenUserImage= createContext()


function ContextApi({children}) {
    const [color,setColor]=useState('')
    const [size,setSize]=useState('SM')
    const [count,setCount]=useState(0)
    const [isBtnClicked,setIsBtnClicked]=useState(false)
    const [isColorClicked,setIsColorClicked]=useState(false)
    const [clikedProduct, setClikedProduct] = useState([]);
    const [product, setProduct] = useState([]);
    const [param, setParams] = useState(null);
    const [isProductClicked,setIsProductClicked]=useState(0)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [whichBtnClicked,setWhichBtnClicked]=useState('SignUp');
    const [userImage, setUserImageImage] = useState(null);
    const [userInfo,setUserInfo] =useState([]);
    const [user,setUser] =useState();
    const [choosenUserImage,setChoosenUserImage] =useState();
 
  useEffect(() => {

   
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
   
  return (
    <Color.Provider value={[color,setColor]}>
    <Size.Provider value={[size,setSize]}>
    <Count.Provider value={[count,setCount]}>
    <IsBtnClicked.Provider value={[isBtnClicked,setIsBtnClicked]}>
    <IsColorClicked.Provider value={[isColorClicked,setIsColorClicked]}>
    <ClikedProduct.Provider value={[clikedProduct, setClikedProduct]}>
    <Product.Provider value={[product, setProduct]}>
    <ViewportWidth.Provider value={[viewportWidth, setViewportWidth]}>
    <IsProductClicked.Provider value={[isProductClicked,setIsProductClicked]}>
    <WhichBtnClicked.Provider value={[whichBtnClicked,setWhichBtnClicked]}>
    <UserImage.Provider value={[userImage, setUserImageImage]}>
    <UserInfo.Provider value={[userInfo,setUserInfo]}>
    <User.Provider value={[user,setUser]}>
    <ChoosenUserImage.Provider value={[choosenUserImage,setChoosenUserImage]}>
    {children}
    </ChoosenUserImage.Provider>
    </User.Provider>
    </UserInfo.Provider>
    </UserImage.Provider>
    </WhichBtnClicked.Provider>
    </IsProductClicked.Provider>
    </ViewportWidth.Provider>
    </Product.Provider>
    </ClikedProduct.Provider>
    </IsColorClicked.Provider>
    </IsBtnClicked.Provider>
    </Count.Provider>
    </Size.Provider>
    </Color.Provider>
  )
}

export default ContextApi