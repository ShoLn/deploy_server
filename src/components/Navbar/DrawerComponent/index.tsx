import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText ,Toolbar} from '@mui/material'
import React from 'react'

//icon
import PeopleIcon from '@mui/icons-material/People';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InventoryIcon from '@mui/icons-material/Inventory';

// type
import {DrawerComponentProps} from './type'

// drawer lists
const drawerLists = [
  {name: "Account & Group", icon: <PeopleIcon/>},
  {name: "Field", icon: <HomeWorkIcon/>},
  {name: "Inventory", icon: <InventoryIcon/>}
]


function DrawerComponent({openDraw}:DrawerComponentProps) {
  return (
    <Drawer
        sx={{
        }}
        variant="persistent"
        anchor="left"
        open={openDraw}
      >
        <Toolbar/>
        <List>
          {drawerLists.map((list) => (
            <ListItem key={list.name} >
              <ListItemButton>
                <ListItemIcon>
                  {list.icon}
                </ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
  )
}

export default DrawerComponent