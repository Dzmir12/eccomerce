import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import { AnimatePresence,motion } from 'framer-motion'
import React, { useContext } from 'react'
import Button from '../Button/Button'
import SignUpAndLogin from '../SignUpAndLogin/SignUpAndLogin'
import { WhichBtnClicked } from '../../ContextApi/ContextApi'

function Login({choosenBtn,off}) {
  return (
    <div  className='flex flex-col items-center w-full h-full gap-5 mt-[6rem]'  >
    <SignUpAndLogin choosenBtn='Login' off='off'/>
    </div>
  )
}

export default Login