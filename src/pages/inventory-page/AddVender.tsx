import React from "react";
// mui component
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputLabel,
  styled,
} from "@mui/material";
import {
  VenReducerActionType,
  VenReducerStateType,
  VenActionEnum,
  VenFormikStateType,
} from "./type";

// formik
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FormikProps,
  FieldProps,
} from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";

// styled wrapper
const StyledWrapper = styled(Dialog)(({ theme }) => ({
  ".dialog-title": {
    fontWeight: 700,
  },

  ".dialog-content": {
    width: "600px",
  },

  // Formik component
  ".form-container": {
    // each field
    ".field": {
      marginTop: theme.spacing(3),
      // input lable
      ".label": {
        color: "black",
        fontWeight: "600",
        // required lable
        ".required": {
          color: "red",
        },
      },
      // input
      ".input": {
        height: "40px",
      },
    },
    // button group
    ".button-group": {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      // each button
      ".bu": {
        marginLeft: theme.spacing(2),
        textTransform: "capitalize",
      },
    },
  },
}));

// rfce
function AddVender({
  venderState,
  dispatchVender,
}: {
  venderState: VenReducerStateType;
  dispatchVender: React.Dispatch<VenReducerActionType>;
}) {
  // formik initialState
  let initialValues: VenFormikStateType;
  let editVenId = venderState.editVenId;
  if (editVenId) {
    initialValues = venderState.data.filter((ven) => ven.id === editVenId)[0];
  } else {
    initialValues = {
      name: "",
      phone: "",
      address: "",
      taxIdNumber: "",
    };
  }

  // formik schema
  const validationSchemaAdd = Yup.object({
    name: Yup.string().required("Name is required !!"),
    phone: Yup.string().required("Phone is required !!"),
  });

  //formik onSubmit
  const onSubmit = (values: VenFormikStateType) => {};

  // return JSX
  return (
    <StyledWrapper
      open={venderState.addVenOpen}
      onClose={() => {
        dispatchVender({ type: VenActionEnum.HANDLEADDVENOPEN });
      }}
    >
      <DialogTitle className="dialog-title">Add vender</DialogTitle>
      <Divider />
      <DialogContent className="dialog-content">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaAdd}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form className="form-container">
                <Box className="field">
                  <InputLabel htmlFor="name" className="label" shrink>
                    {"Name"}&nbsp;
                    <span className="required">*</span>
                  </InputLabel>
                  <Field
                    InputProps={{
                      className: "input",
                    }}
                    id={"name"}
                    component={TextField}
                    size="small"
                    name="name"
                    type="text"
                  />
                </Box>
                <Box className="field">
                  <InputLabel htmlFor="phone" className="label" shrink>
                    {"Phone"}&nbsp;
                    <span className="required">*</span>
                  </InputLabel>
                  <Field
                    InputProps={{
                      className: "input",
                    }}
                    id={"phone"}
                    component={TextField}
                    size="small"
                    name="phone"
                    type="text"
                  />
                </Box>
                <Box className="field">
                  <InputLabel htmlFor="address" className="label" shrink>
                    {"Address"}&nbsp;
                  </InputLabel>
                  <Field
                    InputProps={{
                      className: "input",
                    }}
                    id={"address"}
                    component={TextField}
                    size="small"
                    name="address"
                    type="text"
                    fullWidth
                  />
                </Box>
                <Box className="field">
                  <InputLabel htmlFor="taxIdNumber" className="label" shrink>
                    {"Tax ID number"}&nbsp;
                  </InputLabel>
                  <Field
                    InputProps={{
                      className: "input",
                    }}
                    id={"taxIdNumber"}
                    component={TextField}
                    size="small"
                    name="taxIdNumber"
                    type="text"
                  />
                </Box>
                <Box className="button-group">
                  <Button
                    className="bu cancel"
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      dispatchVender({ type: VenActionEnum.HANDLEADDVENOPEN });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button className="bu save" type="submit" variant="contained">
                    Save
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </StyledWrapper>
  );
}

export default AddVender;
