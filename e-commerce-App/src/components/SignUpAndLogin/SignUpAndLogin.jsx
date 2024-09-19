import TextField from '@mui/material/TextField';
import {  motion } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import Button from '../Button/Button';
import { useContext, useEffect, useState } from 'react';
import { ChoosenUserImage, User, UserImage, UserInfo, ViewportWidth, WhichBtnClicked } from '../../ContextApi/ContextApi';
import { useForm } from 'react-hook-form';
import { json } from 'react-router-dom';

function SignUpAndLogin({choosenBtn,off}) {
  const [whichBtnClicked,setWhichBtnClicked]=useContext(WhichBtnClicked)
  const [showPassword, setShowPassword] =useState(false);
  const [userImage, setUserImage] =useContext(UserImage);
  const [userInfo,setUserInfo] =useContext(UserInfo)
  const [massage, setMassage] =useState('');
  const [user,setUser] =useContext(User)
  const [choosenUserImage,setChoosenUserImage] =useContext(ChoosenUserImage);
  const [viewportWidth, setViewportWidth] = useContext(ViewportWidth);

  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  }=useForm()



  const handleChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          const imageUrl = URL.createObjectURL(file);
          setUserImage(imageUrl);
      }
      console.log(userImage)
  };
  
  const handleClickShowPassword = () => setShowPassword((show) =>!show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
    
    
  // function OnSubmite(data){
  //   console.log(data);
  //   const UserInfo={
  //     name:data.username,
  //     password:data.password,
  //     image:userImage
  //   }
  //   setUserInfo([...userInfo,UserInfo])
  //   console.log('name the user enter')
  //   console.log(data.username)
  //   console.log('userinfo state') 
  //  console.log(userInfo.map((item)=>item.name))
  //  const existNames=userInfo.map((item)=>item.name)
  //   if( existNames == data.username){
  //     setMassage('this username has been taken')
  //   }else{
  //     setUserInfo([...userInfo,UserInfo])
  //     localStorage.setItem("UserInfo",JSON.stringify(userInfo));
  //     setMassage("accepted")
  //     reset()
  //     setUserImage('')
  //   }
   
    
  // }
  
  // useEffect(()=>{
  //   console.log('localStorage')
  //   setUserInfo(JSON.parse(localStorage.getItem("UserInfo")|| []))
  // // // setExistingUsernames(JSON.parse(localStorage.getItem("UserInfo")))
  // // const existingUsernames2=JSON.parse(localStorage.getItem("UserInfo"))
  // // console.log('state localStorage')
  // // console.log(existingUsernames2.map((item)=> item.name))
  // },[])
  
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("UserInfo")) || [];
    setUserInfo(storedUserInfo);
}, []);

console.log('userInfo')
console.log(userInfo)
  
  function OnSubmite(data) {
    console.log('the new username and password')
    console.log(data)
    const UserInfo = {
        name: data.username,
        password: data.password,
        image: userImage,
        enter:whichBtnClicked
    };
    const existPasswords = userInfo.map((item) => item.password);
    const existimages = userInfo.map((item) => item.image);
    const existNames = userInfo.map((item) => item.name);
    // Check if the username is not dublicated
     if(whichBtnClicked=='SignUp'){
    if (existNames.includes(data.username)) {
        setMassage('this username has been taken');
        data.username==''
    } else {
       // if the username is not dublicated
        const updatedUserInfo = [...userInfo, UserInfo];
        setUserInfo(updatedUserInfo);
        setUser(data.username)
        setChoosenUserImage(userImage)
        localStorage.setItem("UserInfo", JSON.stringify(updatedUserInfo));
        setMassage("");
        reset();
        setUserImage('');
    }
  }
  
  if (whichBtnClicked === 'Login') {
    // Check if the username exists
    const userIndex = existNames.indexOf(data.username);
    if (userIndex !== -1 && existPasswords[userIndex] === data.password) {
        // Successful login
        const UserInfo = {
            name: data.username,
            password: data.password,
            image:existimages[userIndex],
            enter: 'true',
        };
        const updatedUserInfo = [...userInfo, UserInfo];
        localStorage.setItem("UserInfo", JSON.stringify(updatedUserInfo));
        setUser(data.username)
        setChoosenUserImage(existimages[userIndex])
        setMassage('welcome back ');
        reset();
        setUserImage('');
    } else {
        // Invalid credentials
        setMassage('Username or the Password entered is incorrect');
    }
}



  
}

  

  
  return (
    <form onSubmit={handleSubmit(OnSubmite)}  className='flex flex-col items-center w-full h-full gap-5'>
       <motion.div  initial={{y:100,opacity:'0%'}} whileInView={{y:0,opacity:'100%'}} transition={{type:'spring', stiffness:47,damping:10}} exit={{y:100,opacity:'0%',transition:{type:'spring', stiffness:47,damping:10}}}  style={{display:whichBtnClicked=='SignUp'?'':'none'}} className='relative flex items-center w-40 h-40 border-2 border-black border-dashed rounded-full cursor-pointer rejustify-center'>
      <input type="file" onChange={handleChange} className='w-[10rem] h-full rounded-full absolute text-black cursor-pointer' />
      <button className='absolute w-full h-full text-white rounded-full pointer-events-none bg-three-color-gradient '>Upload Your Photo Here</button>
      {userImage && <img src={userImage} className='absolute w-full h-full rounded-full pointer-events-none' alt="Preview"  />}
      </motion.div>
     
      <motion.div  className='w-[18rem] max-[397px]:w-[15rem]' initial={{y:200,opacity:'0%'}} whileInView={{y:0,opacity:'100%'}} transition={{type:'spring', stiffness:47,damping:10}} exit={{y:100,opacity:'0%',transition:{type:'spring', stiffness:47,damping:10}}}    >
      <TextField key={`${whichBtnClicked}form`} {...register('username',{required:'Username is required',validate:(value)=>{
      },pattern:{value:/^(?!.*\s).+$/,message:'Username must be without out whitespace'},minLength:{value:3,message:'Username must be at lest 3 characters'}})}
      error={errors.username || massage=="this username has been taken" ||massage=="Username or the Password entered is incorrect"} id={`${whichBtnClicked}-outlined-basic`} label="Username" variant="standard"  className='rounded-[2rem] w-[20rem] max-[397px]:w-[15rem]'/>
      </motion.div> 
      {errors.username && (
        <p className='absolute text-red-500 top-[18.7rem] right-[24rem] p-[10px] rounded-[28px] max-[851px]:top-[23.7rem] max-[397px]:right-[22.5rem]'style={{right:errors.username.message.length!==20?'16.5rem':'',top:whichBtnClicked=='Login'&& viewportWidth <= 850?'18.3rem':whichBtnClicked=='Login'?'13.5rem':''}}>{`${errors.username.message}`}</p>
      )}
      
      <motion.div  className='w-[18rem] max-[397px]:w-[15rem]' initial={{y:100,opacity:'0%'}} whileInView={{y:0,opacity:'100%'}} transition={{type:'spring', stiffness:47,damping:10}} exit={{y:100,opacity:'0%',transition:{type:'spring', stiffness:47,damping:10}}}    >
      <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel error={errors.password && (
            <p className='text-red-500'>{`${errors.password.message}`}</p>
          )} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
           
           {...register('password',{required:'Password is required',pattern:{value:/^(?!.*\s).+$/,message:'Password must be without out whitespace'},minLength:{value:6,message:'Password must be at lest 6 characters'}})}
           error={errors.password ||massage=="Username or the Password entered is incorrect"}
           className='rounded-[2rem] w-[20rem] max-[397px]:w-[15rem] '
            id={`${whichBtnClicked}-standard-adornment-password`}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        
        </FormControl>
        {errors.password && (
            <p className='absolute text-red-500 top-[23.7rem] right-[24rem] p-[10px] rounded-[28px] max-[851px]:top-[28.7rem] max-[397px]:right-[22.5rem]' style={{right:errors.password.message.length!==20?'16.5rem':'',top:whichBtnClicked=='Login'&& viewportWidth <= 850?'23.3rem':whichBtnClicked=='Login'?'18.3rem':''}}>{`${errors.password.message}`}</p>
          )}
     <p className='absolute text-red-500 top-[18.7rem] right-[20.2rem] p-[10px] rounded-[28px] max-[851px]:top-[23.7rem] max-[397px]:right-[18.9rem]' style={{right:massage=="Username or the Password entered is incorrect"&&viewportWidth <= 397?'19.4rem':massage=='this username has been taken'?"20.2rem":'12.4rem',width:massage=="Username or the Password entered is incorrect"&&viewportWidth <= 397?'12rem':'',textAlign:massage=="Username or the Password entered is incorrect"&&viewportWidth <= 397?'center':'',top:massage=="Username or the Password entered is incorrect"&&viewportWidth <= 397?'23.4rem':''}}>{massage}</p>
    
      </motion.div>
      <Button text='Confirm' choosenBtn={choosenBtn}  off={off}  position='relative' top={viewportWidth <= 397&& whichBtnClicked=='Login'?'4rem':'2rem'} width={viewportWidth <= 397?'12rem':'20rem'} left={viewportWidth <= 397?'.7rem':'-2.3rem'}  />
    </form>
  )
}

export default SignUpAndLogin