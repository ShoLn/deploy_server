// custom query hook
import { useVenderFetch } from "../../hooks/useVenderFetch";

// type
import {
  VenReducerStateType,
  VenReducerActionType,
  VenActionEnum,
  VenderDataType,
} from "./type";
// icon
import SearchIcon from "@mui/icons-material/Search";

// MUI component
import { Typography, styled, TextField, IconButton, Box } from "@mui/material";
import { useEffect, useReducer } from "react";
import VenderDeviceComponent from "./VenderDeviceComponent";

///////////////////////////////////////////////////////////////////////////////////////
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
  // api GET vender all datas
  const { data } = useVenderFetch(
    {},
    { method: "GET", url: "http://localhost:4000/vender" }
  );

  // vender useReducer
  const venderInitialState = {
    data,
    addVenOpen: false,
    deleteVenOpen: false,
    editVenId: "",
    focusVenId: "",
  };

  const venderReducer = (
    state: VenReducerStateType,
    action: VenReducerActionType
  ): VenReducerStateType => {
    const { type, payload } = action;
    switch (type) {
      case VenActionEnum.GETALLVEN:
        return { ...state, data: data };
      case VenActionEnum.HANDLEADDVENOPEN:
        if (typeof payload === "string") {
          return {
            ...state,
            addVenOpen: !state.addVenOpen,
            editVenId: payload,
          };
        } else if (typeof payload === "object" && state.data) {
          return {
            ...state,
            data: [...state.data, payload],
            addVenOpen: !state.addVenOpen,
          };
        }
        return { ...state, addVenOpen: !state.addVenOpen, editVenId: "" };
      case VenActionEnum.EDITVEN:
        if (typeof payload === "object" && state.data) {
          return {
            ...state,
            data: state.data.map((ven) =>
              ven.id === payload.id ? payload : ven
            ),
          };
        }
        return state;
      case VenActionEnum.FOCUSVEN:
        if (typeof payload === "string") {
          return { ...state, focusVenId: payload };
        }
        return state;
      default:
        return state;
    }
  };

  const [venderState, dispatchVender] = useReducer(
    venderReducer,
    venderInitialState
  );

  // update vender initial state after data fetch complete
  useEffect(() => {
    dispatchVender({ type: VenActionEnum.GETALLVEN });
  }, [data]);

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
      {/* Vender Lists */}
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
