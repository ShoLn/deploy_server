import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

//icon
import PeopleIcon from "@mui/icons-material/People";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InventoryIcon from "@mui/icons-material/Inventory";

// type
import { DrawerComponentProps } from "./type";

// drawer lists
const drawerLists = [
  {
    name: "Account & Group",
    icon: <PeopleIcon fontSize="small" />,
    path: "/account-page",
  },
  {
    name: "Field",
    icon: <HomeWorkIcon fontSize="small" />,
    path: "/field-page",
  },
  {
    name: "Inventory",
    icon: <InventoryIcon fontSize="small" />,
    path: "/inventory-page",
  },
];

function DrawerComponent({ openDraw }: DrawerComponentProps) {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "264px",
          fontSize: "10px",
        },
      }}
      variant="persistent"
      anchor="left"
      open={openDraw}
    >
      <Toolbar />
      <List>
        {drawerLists.map((list) => (
          <ListItem key={list.name}>
            <ListItemButton
              onClick={() => {
                handleClick(list.path);
              }}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText
                primary={list.name}
                primaryTypographyProps={{ sx: { fontSize: "16px" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

export default DrawerComponent;
