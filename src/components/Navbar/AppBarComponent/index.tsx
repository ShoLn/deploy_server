import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

//type
import { AppBarComponentProps } from "./type";

//icon
import MenuIcon from "@mui/icons-material/Menu";

function AppBarComponent({ handleDrawOpen }: AppBarComponentProps) {
  const theme = useTheme();
  const themeGray = theme.palette.grey.A700;
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        bgcolor: "white",
        width: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawOpen}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button
          size="large"
          sx={{
            color: "black",
            fontWeight: "bolder",
            textTransform: "capitalize",
            fontSize:"20px"
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Deploy
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
