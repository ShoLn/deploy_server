// fakeData
import { venderData } from "../../fakeData";
// type
import {
  VenReducerStateType,
  VenReducerActionType,
  VenActionEnum,
} from "./type";
// icon
import SearchIcon from "@mui/icons-material/Search";

// MUI component
import { Typography, styled, TextField, IconButton, Box } from "@mui/material";
import { useEffect, useReducer } from "react";
import VenderDeviceComponent from "./VenderDeviceComponent";

///////////////////////////////////////////////////////////////////////////////////////

// vender useReducer
const venderInitialState = {
  data: [
    {
      id: "",
      name: "",
      phone: "",
      address: "",
      taxIdNumber: "",
    },
  ],
  addVenOpen: true,
  deleteVenOpen: false,
  editVenId: "",
};
const venderReducer = (
  state: VenReducerStateType,
  action: VenReducerActionType
): VenReducerStateType => {
  const { type, payload } = action;
  switch (type) {
    case VenActionEnum.GETALLVEN:
      return { ...state, data: venderData };
    case VenActionEnum.HANDLEADDVENOPEN:
      return { ...state, addVenOpen: !state.addVenOpen };
    case VenActionEnum.EDITVEN:
      if (payload) {
        return { ...state, editVenId: payload };
      }
      return state;
    default:
      return state;
  }
};

// Style wrapper
const StyledWrapper = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  height: "100%",

  ".content-container": {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
}));

// RFCE
const HomePage = () => {
  const [venderState, dispatchVender] = useReducer(
    venderReducer,
    venderInitialState
  );

  // get vendor data
  useEffect(() => {
    dispatchVender({ type: VenActionEnum.GETALLVEN });
  }, []);

  // return JSX
  return (
    <StyledWrapper>
      <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
        Device
      </Typography>
      {/* searchBar */}
      <TextField
        variant="outlined"
        InputProps={{
          sx: {
            height: "36px",
            fontSize: "14px",
            width: "196px",
            bgcolor: "#FFFFFF",
          },
          startAdornment: (
            <IconButton edge="start">
              <SearchIcon fontSize="small" />
            </IconButton>
          ),
        }}
        placeholder="Search"
      />
      <Box className="content-container">
        <VenderDeviceComponent
          venderState={venderState}
          dispatchVender={dispatchVender}
        />
      </Box>
    </StyledWrapper>
  );
};

export default HomePage;
