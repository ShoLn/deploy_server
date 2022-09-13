import React from "react";
import { Box, Button, Divider, Paper, styled, Typography } from "@mui/material";

const StyledWrapper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "450px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  // 表格標題
  ".title": {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
    fontWeight: "bolder",
  },

  ".content-container": {
    margin: theme.spacing(3),

    ".button-group": {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(4),
      // 各 button
      ".bu": {
        marginLeft: theme.spacing(2),
        textTransform: "capitalize",
      },
    },
  },
}));

function DeleteVendor({
  confirmDelete,
  setDeleteVen,
}: {
  confirmDelete: () => void;
  setDeleteVen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <StyledWrapper>
      <Typography variant="h6" className="title">
        Delete Vendor
      </Typography>
      <Divider />
      <Box className="content-container">
        <Typography>The vendor will be deleted.</Typography>
        <Box className="button-group">
          <Button
            size="small"
            className="bu cancel"
            variant="outlined"
            color="secondary"
            onClick={() => {
              setDeleteVen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            className="bu save"
            variant="contained"
            color="error"
            onClick={() => {
              setDeleteVen(false);
              confirmDelete();
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </StyledWrapper>
  );
}

export default DeleteVendor;
