// type
import {
  VenReducerStateType,
  VenReducerActionType,
  VenActionEnum,
} from "./type";

// icon
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// mui component
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import AddVender from "./AddVender";

// styled wrapper
const StyledWrapper = styled("div")(({ theme }) => ({
  width: "20%",
  height: "100%",
  backgroundColor: "white",
  marginTop: theme.spacing(3),

  ".list-tltle": {
    ".MuiListItemText-primary": {
      fontWeight: "700",
      fontSize: theme.typography.htmlFontSize,
    },
  },

  ".list-item": {
    ":hover": {
      backgroundColor: "#F3F2F1",
      cursor: "pointer",
      ".item-icon": {
        display: "flex",
      },
    },
    ".item-icon": {
      display: "none",
    },
    ".delete": {
      color: "#B5B5B5",
    },
  },

  ".activate": {
    backgroundColor: "#EEEFFC",
  },

  ".add-button": {
    textTransform: "capitalize",
    color: "#666666",
  },
}));

// edit vender function
const handleEdit = (
  editId: string,
  dispatchVender: React.Dispatch<VenReducerActionType>
) => {
  dispatchVender({ type: VenActionEnum.HANDLEADDVENOPEN });
  dispatchVender({ type: VenActionEnum.EDITVEN, payload: editId });
};

// rfce
function VenderDeviceComponent({
  venderState,
  dispatchVender,
}: {
  venderState: VenReducerStateType;
  dispatchVender: React.Dispatch<VenReducerActionType>;
}) {
  // return JSX
  return (
    <StyledWrapper>
      <List>
        {/* title */}
        <ListItem divider>
          <ListItemText primary="Vendor" className="list-tltle" />
          <Button
            startIcon={<AddIcon />}
            onClick={() => {
              dispatchVender({ type: VenActionEnum.HANDLEADDVENOPEN });
            }}
            className="add-button"
          >
            Add
          </Button>
        </ListItem>
        {/* content */}
        {venderState.data.map((vender) => (
          <ListItem
            divider
            key={vender.id}
            className={`list-item ${
              vender.id === venderState.focusVenId ? "activate" : ""
            }`}
            onClick={() => {
              dispatchVender({
                type: VenActionEnum.FOCUSVEN,
                payload: vender.id,
              });
            }}
          >
            <ListItemText primary={vender.name} secondary={vender.phone} />
            <IconButton className="item-icon">
              <DeleteIcon fontSize="small" className="delete" />
            </IconButton>
            <IconButton
              className="item-icon"
              onClick={() => {
                handleEdit(vender.id, dispatchVender);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </ListItem>
        ))}
        {/* addVender dialog */}
        <AddVender venderState={venderState} dispatchVender={dispatchVender} />
      </List>
    </StyledWrapper>
  );
}

export default VenderDeviceComponent;
