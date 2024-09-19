import React from 'react'

function SpiningStarOrbit({children,orbitHight,orbitWidth,rotate}) {
  return (
    <div className="absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
    <div className=" animate-spin rounded-full [animation-duration:30s]" style={{height:orbitHight,width:orbitWidth,rotate:rotate}}>
    <div className="inline-flex  animate-spin [animation-duration:5s]" >
    {children}
     </div>
     </div>
     </div>
  )
}

export default SpiningStarOrbit