import React from 'react'
import {AppBar, Toolbar, IconButton,Typography} from '@mui/material'

//icon
import MenuIcon from '@mui/icons-material/Menu';

function MuiAppBar() {
  return (
    <AppBar position="fixed" open={open} sx={{width:"100%", zIndex:(theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default MuiAppBar