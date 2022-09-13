// fake data
import { vendorData } from "../../../../fakeData";

//mui
import {
  Divider,
  Paper,
  Typography,
  styled,
  Button,
  Box,
  InputLabel,
} from "@mui/material";
import React from "react";

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

//type
import { SubmitValue } from "./type";

const StyledWrapper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "600px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  // 表格標題
  ".title": {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
  // 表單容器
  ".form-container": {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    // 各輸入框容器
    ".field": {
      marginTop: theme.spacing(3),
      // input 名稱
      ".label": {
        color: "black",
        fontWeight: "600",
        // 星號符號
        ".required": {
          color: "red",
        },
      },
      // input 本身
      ".input": {
        height: "40px",
      },
    },
    // cancel save button 容器
    ".button-group": {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      // 各 button
      ".bu": {
        marginLeft: theme.spacing(2),
        textTransform: "capitalize",
      },
    },
  },
}));

// 組件本身
function AddVendor({
  handleVenOpen,
  venData,
  setVenData,
  venTaxId,
  setVenTaxId,
}: {
  handleVenOpen: React.Dispatch<React.SetStateAction<boolean>>;
  venData: SubmitValue[];
  setVenData: React.Dispatch<React.SetStateAction<SubmitValue[]>>;
  venTaxId: string;
  setVenTaxId: React.Dispatch<React.SetStateAction<string>>;
}) {
  // 表單初始值
  let initialValues: SubmitValue;
  if (venTaxId) {
    initialValues = venData.filter((data) => data.taxIdNumber === venTaxId)[0];
  } else {
    initialValues = {
      name: "Test Name",
      phone: "0912345678",
      address: "台北市信義區信義路123號",
      taxIdNumber: "666",
    };
  }

  // 提交表單
  const onSubmit = (
    values: SubmitValue
    // onSubmitProps: FormikHelpers<SubmitValue>
  ) => {
    console.log(values);
    // console.log(onSubmitProps);
    // onSubmitProps.resetForm(initialValues);
    if (venTaxId) {
      setVenData((prev) => {
        const edit = prev.map((data) => {
          if (data.taxIdNumber !== venTaxId) {
            return data;
          } else {
            console.log(data);
            return values;
          }
        });
        return edit;
      });
    } else {
      setVenData((prev) => {
        prev.push(values);
        return prev;
      });
    }
    setVenTaxId("");
    handleVenOpen(false);
  };

  // yup schema 驗證
  const validationSchemaAdd = Yup.object({
    name: Yup.string().required("Name is required !!"),
    phone: Yup.string()
      .required("Phone is required !!")
      .matches(/^[0-9]{10}$/g, "Invalid format !!"),
  });
  return (
    <StyledWrapper>
      <Typography variant="h6" className="title">
        Add Vendor
      </Typography>
      <Divider />
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
                    setVenTaxId("");
                    handleVenOpen(false);
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
    </StyledWrapper>
  );
}

export default AddVendor;
