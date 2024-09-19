import React from 'react'

function StarIcon({starHight,starWidth}) {
  return (
    <div> <svg className=' text-cyan-600' style={{height:starHight,width:starWidth}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
</svg>
    </div>
  )
}

export default StarIcon