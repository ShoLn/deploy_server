// component
import AddVendor from "./AddVendor";

// fake data
import { vendorData } from "../../../fakeData";

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

function Vendor() {
  const theme = useTheme();
  const themeGrayFirst = theme.palette.grey.A700;

  const [addVen, setAddVen] = useState(true);

  return (
    <StyledWrapper>
      <List>
        {/* title */}
        <ListItem divider>
          <ListItemText primary="Vendor" className="list-title" />
          <Button
            startIcon={<AddIcon sx={{ color: themeGrayFirst }} />}
            sx={{
              color: themeGrayFirst,
              textTransform: "capitalize",
              fontWeight: "600",
            }}
            onClick={() => {
              setAddVen(true);
            }}
          >
            Add
          </Button>
        </ListItem>
        {/* list item */}
        {vendorData.map((data) => (
          <ListItem divider className="list-item">
            <ListItemText primary={data.name} secondary={data.id} />
            <IconButton className="item-icon">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton className="item-icon">
              <EditIcon fontSize="small" />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {/* add vendor modal */}
      <Modal
        open={addVen}
        onClose={() => {
          setAddVen(false);
        }}
      >
        <AddVendor />
      </Modal>
    </StyledWrapper>
  );
}

export default Vendor;
