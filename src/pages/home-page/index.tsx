// component
import Vendor from "./Vendor";

// MUI component
import { Typography, styled, TextField, IconButton, Box } from "@mui/material";

// icon
import SearchIcon from "@mui/icons-material/Search";
import Device from "./Device";

const StyledWrapper = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),

  ".content-container": {
    display: "flex",
    justifyContent:"space-evenly"
  },
}));

const HomePage = () => {
  return (
    <StyledWrapper>
      <Typography variant="h5">Device</Typography>
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
        <Device />
      </Box>
    </StyledWrapper>
  );
};

export default HomePage;
