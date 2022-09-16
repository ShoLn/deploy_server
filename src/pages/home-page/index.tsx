// icon
import SearchIcon from "@mui/icons-material/Search";

// MUI component
import { Typography, styled, TextField, IconButton, Box } from "@mui/material";

// component
import Vendor from "./Vendor";
import Device from "./Device";
import Firmware from "./Firmware";

const StyledWrapper = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),

  ".content-container": {
    display: "flex",
    justifyContent:"space-between"
  },
}));

const HomePage = () => {
  return (
    <StyledWrapper>
      <Typography variant="h5" sx={{fontWeight:"bolder"}}>Device</Typography>
      {/* searchBar */}
      <TextField
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <IconButton edge="start">
              <SearchIcon />
            </IconButton>
          ),
        }}
        placeholder="Search"
        sx={{ mt: 2, width: "250px", bgcolor: "white" }}
      />
      <Box className="content-container">
        {/* vendor */}
        <Vendor />
        {/* Device */}
        <Device />
        {/* Fireware */}
        <Firmware/>
      </Box>
    </StyledWrapper>
  );
};

export default HomePage;
