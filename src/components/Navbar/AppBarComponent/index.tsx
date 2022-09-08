import React from 'react'
import {AppBar, Toolbar, IconButton,Typography} from '@mui/material'

//type
import {AppBarComponentProps} from './type'

//icon
import MenuIcon from '@mui/icons-material/Menu';



function AppBarComponent({handleDrawOpen}:AppBarComponentProps) {
  return (
    <AppBar position="fixed" sx={{width:"100%", backgroundColor:"white", zIndex: (theme)=>(theme.zIndex.drawer + 1)}}>
        <Toolbar sx={{backgroundColor:""}}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Deploy
          </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent