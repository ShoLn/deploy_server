import React, { useState } from 'react'
import AppBarComponent from './AppBarComponent'
import DrawerComponent from './DrawerComponent'

function Navbar() {

  const [openDraw, setOpenDraw] = useState(true)
  const handleDrawOpen = ()=>{
    setOpenDraw(!openDraw)
  }

  return (
    <div>
        <AppBarComponent handleDrawOpen={handleDrawOpen} />
        <DrawerComponent openDraw={openDraw}/>
    </div>
  )
}

export default Navbar