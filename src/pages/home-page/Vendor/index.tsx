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

//type
import { SubmitValue, EditVenType } from "./AddVendor/type";
import DeleteVendor from "./DeleteVendor";

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
function Vendor() {
  const theme = useTheme();
  const themeGrayFirst = theme.palette.grey.A700;
  const [addVen, setAddVen] = useState(false);
  const [deleteVen, setDeleteVen] = useState(false);
  const [deleteTaxId, setDeleteTaxId] = useState("");
  const [venTaxId, setVenTaxId] = useState("");
  const [venData, setVenData] = useState<Array<SubmitValue>>(vendorData);

  // 刪除 vendor
  const handleDelete = (deleteIndex: string) => {
    setVenData((prev) =>
      prev.filter((data) => data.taxIdNumber !== deleteIndex)
    );
  };

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
        {/* add or edit vendor modal */}
        <Modal
          open={addVen}
          onClose={() => {
            setAddVen(false);
          }}
        >
          <AddVendor
            venTaxId={venTaxId}
            setVenTaxId={setVenTaxId}
            venData={venData}
            setVenData={setVenData}
            handleVenOpen={setAddVen}
          />
        </Modal>
        {/* list item */}
        {venData.map((data: SubmitValue) => (
          <ListItem divider className="list-item" key={data.taxIdNumber}>
            <ListItemText primary={data.name} secondary={data.phone} />
            <IconButton
              className="item-icon"
              onClick={() => {
                setDeleteVen(true);
                setDeleteTaxId(data.taxIdNumber);
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton className="item-icon">
              <EditIcon
                fontSize="small"
                onClick={() => {
                  setVenTaxId(data.taxIdNumber);
                  setAddVen(true);
                }}
              />
            </IconButton>
          </ListItem>
        ))}
        {/* delete vendor modal */}
        <Modal
          open={deleteVen}
          onClose={() => {
            setAddVen(false);
          }}
        >
          <DeleteVendor
            confirmDelete={() => {
              handleDelete(deleteTaxId);
            }}
            setDeleteVen={setDeleteVen}
          />
        </Modal>
      </List>
    </StyledWrapper>
  );
}

export default Vendor;
