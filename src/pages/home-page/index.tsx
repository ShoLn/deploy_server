// component
import Vendor from "./Vendor";

// MUI component
import { Typography, styled, TextField, IconButton } from "@mui/material";

// icon
import SearchIcon from "@mui/icons-material/Search";

const StyledWrapper = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
}));

const HomePage = () => {
  return (
    <StyledWrapper>
      <Typography variant="h5">Device</Typography>
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
      <Vendor />
    </StyledWrapper>
  );
};

export default HomePage;
