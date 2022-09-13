import AddDevice from "./AddDevice";
import DeleteDevice from "./DeleteDevice";
// fake data
import { deviceData } from "../../../fakeData";

// MUI
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

// icon
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

//type
import { SubmitDeviceType } from "./type";

const StyledWrapper = styled("div")(({ theme }) => ({
  width: "300px",
  height: "800px",
  backgroundColor: "white",
  marginTop: theme.spacing(3),

  ".list-title": {
    ".MuiListItemText-primary": {
      fontWeight: "700",
    },
  },

  ".list-item": {
    ":hover": {
      backgroundColor: "#EEF5FD",
      cursor: "pointer",
      ".item-icon": {
        display: "flex",
      },
    },
    ".item-icon": {
      display: "none",
    },
  },

  ".add-vendor-container": {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
}));

// 組件本身
function Device() {
  const theme = useTheme();
  const themeGrayFirst = theme.palette.grey.A700;
  const [addDev, setAddDen] = useState(false);
  const [deleteDev, setDeleteDev] = useState(false);
  const [deleteMod, setDeleteMod] = useState("");
  const [devMod, setDevMod] = useState("");
  const [devData, setDevData] = useState<Array<SubmitDeviceType>>(deviceData);

  // 刪除 vendor
  const handleDelete = (deleteIndex: string) => {
    setDevData((prev) => prev.filter((data) => data.modal !== deleteIndex));
  };

  return (
    <StyledWrapper>
      <List>
        {/* title */}
        <ListItem divider>
          <ListItemText primary="Device" className="list-title" />
          <Button
            startIcon={<AddIcon sx={{ color: themeGrayFirst }} />}
            sx={{
              color: themeGrayFirst,
              textTransform: "capitalize",
              fontWeight: "600",
            }}
            onClick={() => {
              setAddDen(true);
            }}
          >
            Add
          </Button>
        </ListItem>
        {/* add or edit vendor modal */}
        <Modal
          open={addDev}
          onClose={() => {
            setAddDen(false);
          }}
        >
          <AddDevice
            devMod={devMod}
            setDevMod={setDevMod}
            devData={devData}
            setDevData={setDevData}
            handleDevOpen={setAddDen}
          />
        </Modal>
        {/* list item */}
        {devData.map((data: SubmitDeviceType) => (
          <ListItem divider className="list-item" key={data.modal}>
            <ListItemText
              primary={data.deviceType}
              secondary={`${data.modal} | ${data.communication} | ${data.role}`}
            />
            <IconButton
              className="item-icon"
              onClick={() => {
                setDeleteDev(true);
                setDeleteMod(data.modal);
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton className="item-icon">
              <EditIcon
                fontSize="small"
                onClick={() => {
                  setDevMod(data.modal);
                  setAddDen(true);
                }}
              />
            </IconButton>
          </ListItem>
        ))}
        {/* delete vendor modal */}
        <Modal
          open={deleteDev}
          onClose={() => {
            setAddDen(false);
          }}
        >
          <DeleteDevice
            confirmDelete={() => {
              handleDelete(deleteMod);
            }}
            setDeleteDev={setDeleteDev}
          />
        </Modal>
      </List>
    </StyledWrapper>
  );
}

export default Device;
