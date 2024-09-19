
import Button from '../../components/Button/Button';
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import { useContext } from 'react';
import { ViewportWidth, WhichBtnClicked } from '../../ContextApi/ContextApi';



function Authentication() {
  // const [showPassword, setShowPassword] =useState(false);
  const [whichBtnClicked,setWhichBtnClicked]=useContext(WhichBtnClicked)
  const [viewportWidth, setViewportWidth] = useContext(ViewportWidth);
  function signuporlogin(e) {
    setWhichBtnClicked(e.target.name)
    console.log(whichBtnClicked)
  
  }
  
  return (
  <div className='relative z-10 w-full h-full glass-container'>
    <div className='relative  h-[5rem] max-[851px]:h-[10rem] overflow-hidden '>
    <Button text='SignUp' top='.5rem' left={viewportWidth <= 850?'20rem':'1rem'} position='absolute' choosenBtn='SignUp' whichBtnClicked={whichBtnClicked} btnFunction={signuporlogin} width='10rem' mt='.8rem'/>
    <Button  text='Login' top={viewportWidth <= 850?'4.8rem':'.5rem'} left={viewportWidth <= 850?'20.3rem':'38.5rem'} position='absolute' choosenBtn='Login'whichBtnClicked={whichBtnClicked} btnFunction={signuporlogin} width='10rem'  mt='.8rem'/>
    </div>
    {whichBtnClicked=='SignUp'? <SignUp />:<Login />}
  </div>
   
  )
}

export default Authentication