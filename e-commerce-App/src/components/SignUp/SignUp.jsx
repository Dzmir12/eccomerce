
import TextField from '@mui/material/TextField';
import {  motion } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import Button from '../Button/Button';
import SignUpAndLogin from '../SignUpAndLogin/SignUpAndLogin';
import { useContext, useState } from 'react';
import { UserImage, WhichBtnClicked } from '../../ContextApi/ContextApi';

function SignUp() {
  return (
    
    <div className='flex flex-col items-center w-full h-full gap-5'>
     <SignUpAndLogin choosenBtn='SignUp' off='off'/>
    </div>
  
  )
}

export default SignUp