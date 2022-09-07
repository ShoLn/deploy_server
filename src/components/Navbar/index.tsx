import React, { useState } from 'react'
import AppBarComponent from './AppBar'
import DrawerComponent from './Drawer'

function Navbar() {

    const [openDraw, setOpenDraw] = useState(false)

  return (
    <div>
        <AppBarComponent setOpenDraw={setOpenDraw}/>
        <DrawerComponent/>
    </div>
  )
}

export default Navbar