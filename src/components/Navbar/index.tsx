import React, { useState } from 'react'
import AppBarComponent from './AppBarComponent'
import DrawerComponent from './DrawerComponent'

function Navbar() {

  const [openDraw, setOpenDraw] = useState(false)
  const handleDrawOpen = ()=>{
    setOpenDraw(!openDraw)
  }

  return (
    <div>
        <AppBarComponent handleDrawOpen={handleDrawOpen} openDraw={openDraw}/>
        <DrawerComponent/>
    </div>
  )
}

export default Navbar